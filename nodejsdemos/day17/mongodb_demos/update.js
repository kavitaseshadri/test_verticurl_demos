const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1/simpleDB';
const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db("simpleDB");
        const foods = database.collection("foods");
        const filter = { name: "cake" };
        const options = { upsert: true }
        //if no matching document is found then it will insert the document
        const updateDocument = {
            $set: {
                name: 'Carrot Cake',
                price: '$1.02'
            }
        }
        const result = await foods.updateOne(filter, updateDocument, options);
        console.log(`${result.matchedCount} matching documents found, 
        ${result.modifiedCount} modified`);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);