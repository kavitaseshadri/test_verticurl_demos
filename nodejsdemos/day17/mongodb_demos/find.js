const { MongoClient } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017/simpleDB";
//This is establishing a connection the db server
const client = new MongoClient(uri);
async function run() {
    try {
        const database = client.db("simpleDB");
        const foods = database.collection("foods");
        const query = { name: "lettuce" };
        const food = await foods.findOne(query);
        console.log(food);

    } finally {
        await client.close();
    }
}
run().catch(console.dir);