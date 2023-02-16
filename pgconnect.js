// Require the pg package
const pg = require('pg');

// Create a connection string
const connString = 'postgres://biblioteca:biblioteca@localhost:5432/biblioteca';

// Create a new client
const client = new pg.Client(connString);

// Connect to the database
client.connect((err) => {
    if (err) {
        return console.error('could not connect to postgres', err);
    }
    console.log('Connected to postgres!');
});