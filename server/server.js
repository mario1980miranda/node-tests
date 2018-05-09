const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Ozzy',
        age: 68
    }, {
        name: 'James',
        age: 55
    }, {
        name: 'Dave',
        age: 50
    }]);
});

app.listen(3000);

module.exports.app = app;