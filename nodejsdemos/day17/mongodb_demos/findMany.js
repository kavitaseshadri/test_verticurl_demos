const { MongoClient } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017/simpleDB";
//This is establishing a connection the db server
const client = new MongoClient(uri);
async function run() {
    try {
        const database = client.db("simpleDB");
        const foods = database.collection("foods");
        // const query = { healthy: false };
        const query = { healthy: true };
        const foodArray = await foods.find(query).toArray();
        console.log(foodArray);

    } finally {
        await client.close();
    }
}
run().catch(console.dir);