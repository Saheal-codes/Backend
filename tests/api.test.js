'use strict';
const request = require('supertest');
const app = require('../index.js')


describe('POST/scraping metadata from site', () => {
    it('should return attributes of the url', (done) => {
        request(app)
            .post('/scrapesite')
            .send({
                url : 'https://www.google.com/'
            })
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
describe('POST/scraping metadata from site', () => {
    it('should return attributes of the url', (done) => {
        request(app)
            .post('/scrapesite')
            .send({
                url : ''
            })
            .expect('Content-Type', /text/)
            .expect(400, done);
    });
});
