var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
    // Check if email already exists
    // save user
    db.saveUser({email, password});
    // send welcome mail
};