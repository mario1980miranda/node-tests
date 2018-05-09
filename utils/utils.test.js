const utils = require('./utils');

it('should add two numbers', () => {
    var results = utils.add(33, 11);

    if (results !== 44) {
        throw new Error('Expected 44, but got ' + results);
    }
});

it('should square a number', () => {
    var results = utils.square(2);

    if (results !== 4) {
        throw new Error(`Expected 4, but got ${results}`);
    }
});