const { MongoClient } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017/simpleDB";
//This is establishing a connection the db server
const client = new MongoClient(uri);
async function run() {
    try {
        const database = client.db("simpleDB");
        const collection1 = database.collection("movies");
        const document1 = {
            title: 'Fighter',
            rating: '4.3',
            genre: 'Action',
            revenueCR: 100
        }
        const result = await collection1.insertOne(document1);
        console.log(`a document was inserted with id +${result.insertedId}`);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);

//MongoDB Driver for JavaScript


