const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect("mongodb://127.0.0.1:27017/mixedDB")
        .then(client => {
            console.log('Connected!');
            _db = client.db('mixedDB');
            callback();
        })
        .catch(err => {
            console.log('mongoConnect  failed');
            console.log(err);
            throw err;
        });
};



const getDb = () => {
    console.log('get db loaded');
    mongoConnect(() => {
        console.log('mongodb connected!!');
    });
    try {
        if (_db) {
            console.log('getDb if block');
            return _db;
        }
    } catch (err) {
        console.log('getDb error block');
        console.log(err);
        throw err;
    }
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;