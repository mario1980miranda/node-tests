const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

it('should return Hello World response', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect('Hello World')
        .end(done);
    ;
});

it('should return my user object', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({
                name: 'Ozzy',
                age: 68
            });
        })
        .end(done);
});