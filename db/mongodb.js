const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://localhost:27017';
const databaseName = 'biblioteca';

let db;

mongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log(error);
    }
    console.log('Connected !');
    db = client.db(databaseName);
    // db.collection('books').findOne({ title: 'ABC of java' }, (error, book) => {
    //     console.log(book);
    // });
    // db.collection('books').find().toArray((error, books) => {
    //     console.log(books);
    // });
    // db.collection('books').insertOne({
    //     isbn: '231141343',
    //     title: 'ABC of java',
    //     author: 'A B C',
    // });
});
module.exports = db;