const jwt = require('jsonwebtoken');

const auth = async(req, res, next) => {
    console.log('I am in the Auth middleware.....');
    next();
}

module.exports = auth;