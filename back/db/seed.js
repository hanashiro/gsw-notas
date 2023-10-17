require('dotenv').config({
    path: '../.env',
});

const { MongoClient } = require('mongodb');
const fs = require('fs/promises');
const path = require('path');

// Connection URL
const user = process.env.MONGO_INITDB_ROOT_USERNAME;
const password = process.env.MONGO_INITDB_ROOT_PASSWORD;
const url = `mongodb://${user}:${password}@localhost:27017`;

const client = new MongoClient(url);

// Database Name
const dbName = 'Notas';

// Helpers

async function readJSON(file) {
    const data = await fs.readFile(path.join(__dirname, file), 'utf-8');
    return JSON.parse(data);
}

async function deleteCollection(db, collectionName) {
    const collection = db.collection(collectionName);
    return await collection.deleteMany({});
}

async function insertDocuments(db, collectionName, data) {
    const collection = db.collection(collectionName);
    return await collection.insertMany(data);
}

async function seed(db, collectionName, file) {
    const data = await readJSON(file);
    await deleteCollection(db, collectionName);
    return await insertDocuments(db, collectionName, data);
}

/////////////////////////////////

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);

    let collection = 'Clients';
    let result = await seed(db, collection, './seed/mongo-seed-01.json');
    console.log(`Inserted documents in ${collection}=>`, result);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
