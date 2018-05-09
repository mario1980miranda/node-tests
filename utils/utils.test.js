const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
    var results = utils.add(33, 11);
    expect(results).toBe(44).toBeA('number');
});

it('should square a number', () => {
    var results = utils.square(3);
    expect(results).toBe(9).toBeA('number');
});

it('should expect some values', () => {
    // expect(12).toNotBe(12);
    // expect({name: 'Mario'}).toEqual({name: 'Mario'});
    // expect({name: 'Mario'}).toNotEqual({name: 'mario'});
    // expect([2,3,4]).toInclude(5);
    // expect([2,3,4]).toInclude(2);
    // expect([2,3,4]).toExclude(1);
    expect({
        name: 'Mario',
        age: 37,
        location: 'Curitiba'
    }).toInclude({
        age: 37
    });
});

it('should verify the firs and las names are set', () => {
    var user = {location: 'Parana', age: 37};
    var results = utils.setName(user, 'Mario Miranda');
    expect(results).toInclude({
        firstName: 'Mario',
        lastName: 'Miranda'
    });
})