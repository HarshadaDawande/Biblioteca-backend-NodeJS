const { request } = require("express");
const { response } = require("express");
const { header } = require("express/lib/request");
const joi = require('joi');

const schema = {
    bookId: joi.number().required(),
};
const connection = require('../db/mysqlconnect');

exports.getBooks = async (request, response, next) => {
    let bookList = {};
    const queryString = `SELECT * FROM books;`;
    connection.query(queryString, (error, results) => {
        if (error) {
            throw error;
        }
        bookList = JSON.stringify(results);
        response.status(200).json({
            "body": {
                results
            },
            "header": {
                "Content-Type": "application/json"
            }
        });
        return;
    });
}

exports.getBook = (request, response, next) => {
    const query = `SELECT * FROM books where id = ${request.params.bookId}`;
    connection.query(query, (error, results, fields) => {
        if (error) {
            throw error;
        }
        response.status(200).json({
            "body": {
                results
            },
            "header": {
                "Content-Type": "application/json"
            }
        });
        return;
    });
}