var request = require('supertest');
var should= require('should');
describe('loading express', function () {
    var server;
    server = require('../server');

    const agent = request.agent(server);
    it('should get driver', (done) => {
        agent.get('/requests')
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return reject(err);
                }
                done();
            });
    });

    it('should get driver', (done) => {
        agent.get('/results')
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return reject(err);
                }
                done();
            });
    });
    it('should get driver', (done) => {
        agent.get('/patient')
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return reject(err);
                }
                done();
            });
    });
});