const { MongoClient } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017/simpleDB";
//This is establishing a connection the db server
const client = new MongoClient(uri);
async function run() {
    try {
        const database = client.db("simpleDB");
        const foods = database.collection("foods");
        const query = { name: "lettuce" };
        const result = await foods.deleteOne(query);
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }

    } finally {
        await client.close();
    }
}
run().catch(console.dir);