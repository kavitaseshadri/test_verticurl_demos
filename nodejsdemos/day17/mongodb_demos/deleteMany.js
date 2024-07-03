const { MongoClient } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017/simpleDB";
//This is establishing a connection the db server
const client = new MongoClient(uri);
async function run() {
    try {
        const database = client.db("simpleDB");
        const foods = database.collection("foods");
        const query = { healthy: true };
        const result = await foods.deleteMany(query);
        if (result.deletedCount >= 1) {
            console.log("Successfully deleted multiple document.");
        } else {
            console.log("maybe 0 or 1 documents.");
        }

    } finally {
        await client.close();
    }
}
run().catch(console.dir);