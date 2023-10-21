import dotenv from 'dotenv';
import admin from 'firebase-admin';
import crypto from 'crypto';
import chunk from 'lodash/chunk';
import jsonData from './document/merge_file.json';

dotenv.config();
const { FIREBASE_CONFIG } = process.env;

admin.initializeApp({
  credential: admin.credential.cert(`${FIREBASE_CONFIG}`),
});

type DataItem = {
  name: string;
  count: string;
  proportion: string;
};

type JsonData = Record<string, DataItem[]>;

const db = admin.firestore();

async function writeToFirestore() {
  const data = jsonData as JsonData;

  // chunkSize limited to 500
  const chunkSize = 500;
  const dataChunks = chunk(Object.entries(data), chunkSize);

  let n = 0;

  for await (const chunkData of dataChunks) {
    const bulkWriter = db.bulkWriter();
    
    for (const [finalCodeNm, items] of chunkData) {
      const hash = crypto.createHash('md5').update(finalCodeNm).digest('hex');
      const docRef = db.collection('bulkwriter-example').doc(hash);

      const finalCodeList: Array<DataItem> = items.map(item => ({
        name: item.name,
        count: item.count,
        proportion: item.proportion,
      }));

      const finalCodeCnt = finalCodeList.length.toString();

      bulkWriter.set(docRef, { finalCodeNm, finalCodeCnt, finalCodeList }, { merge: true });
    }

    n += chunkData.length;

    try {
      await bulkWriter.close();
      console.log(`Chunk of size ${chunkData.length} written to Firestore. Now length is ${n}`);
    } catch (error) {
      console.error('Error writing data to Firestore:', error);
    }
  }

  const docCnt = (await db.collection('bulkwriter-example').get()).size;

  console.log(`Total ${n} data written to Firestore successfully. 
  Finally, Firestore document size is ${docCnt}`);
}

writeToFirestore();