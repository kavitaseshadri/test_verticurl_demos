const { MongoClient } = require('mongodb')
const uri = 'mongodb://127.0.0.1/simpleDB';
const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db("simpleDB");
        const foods = database.collection("foods");
        const docs = [
            { name: "cake", healthy: false },
            { name: "lettuce", healthy: true },
            { name: "donut", healthy: false },
            { name: "pizza", healthy: false },
            { name: "cabbage", healthy: true },
            { name: "noodles", healthy: false }
        ];
        const options = { ordered: true };
        const result = await foods.insertMany(docs, options);
        console.log(`${result.insertedCount} documents were inserted`);

    } finally {
        await client.close();
    }
}
run().catch(console.dir);