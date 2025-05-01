# firebase-bulkwriter-example

A comprehensive implementation example of Firebase Firestore BulkWriter operations. This repository demonstrates efficient batch processing and bulk data operations using Firebase Admin SDK.

## Overview

This project showcases the implementation of Firebase Firestore BulkWriter functionality using Node.js `v22.14.0`. The code is built with reference to the official [Firebase Firestore BulkWriter documentation](https://cloud.google.com/nodejs/docs/reference/firestore/latest/firestore/bulkwriter).

## Prerequisites

- Node.js `v22.14.0` or higher
- Firebase project with Firestore enabled
- Firebase Admin SDK credentials

## Getting Started

### Installation

```bash
npm install
```

### Configuration

1. Navigate to the Firebase Console's **Project Settings** > **Service accounts**
2. Select **Firebase Admin SDK** and click **Generate new private key**
3. Download the generated JSON file
4. Place the JSON file in the `config` directory
5. Create a `.env` file in the project root with the following content:
   ```
   FIREBASE_CONFIG=/absolute/path/to/your/firebase-config.json
   ```

### Running the Application

```bash
npm run dev
```