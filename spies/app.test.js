const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);
    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Mario', 37);
        expect(spy).toHaveBeenCalledWith('Mario', 37);
    });
    it('should call saveUser with user object', () => {
        var email = 'mario@test.com';
        var password = 'admin123';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});