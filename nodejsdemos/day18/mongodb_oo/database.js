const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const uri = 'mongodb://127.0.0.1:27017/mixedDB';
const Server = mongodb.Server;


let _db;

const mongoConnect = callback => {
    MongoClient.connect(uri)
        .then(client => {
            console.log('Connected!');
            _db = client.db('mixedDB');
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;