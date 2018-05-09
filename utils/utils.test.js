const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
    describe('Synchronous methods', () => {
        it('should add two numbers', () => {
            var results = utils.add(33, 11);
            expect(results).toBe(44).toBeA('number');
        });
        it('should square a number', () => {
            var results = utils.square(3);
            expect(results).toBe(9).toBeA('number');
        });
    });
    describe('Assynchronous methods', () => {
        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sumResult) => {
                expect(sumResult).toBe(7).toBeA('number');
                done();
            });
        });
        it('should async square a number', (done) => {
            utils.asyncSquare(3, (squareResult) => {
                expect(squareResult).toBe(9).toBeA('number');
                done();
            });
        });
    });
});

describe('Playground tests', () => {
    it('should expect some values', () => {
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
    });      
    it('should not be equals 12', () => {
        expect(21).toNotBe(12);
    });
    it('should be equals comparing objects', () => {
        expect({name: 'Mario'}).toEqual({name: 'Mario'});
    });
    it('should not be equals', () => {
        expect({name: 'Mario'}).toNotEqual({name: 'mario'});
    });
    it('should to be in the list', () => {
        expect([2,3,4]).toInclude(2);
    });
    it('should not to be in the list', () => {
        expect([2,3,4]).toExclude(1);
    });
});