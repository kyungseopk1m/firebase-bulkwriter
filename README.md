# firebase-bulkwriter
Example for firebase bulkwriter.
<br>
I wrote it, so you can edit it in your own way as needed.
<br>
Used Node.JS v18.14.2 without any framework.
<br>
To implement this code, the relevant [reference](https://cloud.google.com/nodejs/docs/reference/firestore/latest/firestore/bulkwriter) was consulted.

## Running BulkWrite
```
npm run dev
```

## Download Firebase Config

To run this project, you'll need the JSON file related to the Firebase Admin SDK.<br>
Follow these steps to obtain the Firebase Admin SDK private key:<br>

1. Go to **Service accounts** in the Firebase Console.
2. Under **Firebase Admin SDK (Node.js)**, click **Generate new private key**.
3. Download the JSON file and place it in the 'config' folder.

Once you have the JSON file, create a '.env' file at the project's root directory, and enter the absolute path to the JSON file in a variable named FIREBASE_CONFIG.