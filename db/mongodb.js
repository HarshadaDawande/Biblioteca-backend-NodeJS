const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://localhost:27017';
const databaseName = 'biblioteca';

mongoClient.connect(connectionUrl, { useNewUrlParser: true}, (error, client) => {

    if(error) {
        return console.log(error);
    }
    console.log('Connected !');
    const db = client.db(databaseName);

    // db.collection('books').insertOne({
    //     isbn: '231141343',
    //     title: 'ABC of java',
    //     author: 'A B C',
    // });
});
