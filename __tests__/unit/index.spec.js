import {app as exporter} from '../../src/index.js';
import fetch from 'node-fetch';

let server;

beforeEach(done => {
    server = exporter.listen(8080, () => {done()});
});

afterEach(done => {
    server.close();
    server = null;
    done();
});

test('server runs', (done) => {
    fetch('http://localhost:8080')
        .then(res => {
            expect(res.ok).toBe(true)
            done()
        })
        .catch(err => console.error(err));
});

test('serves a metrics endpoint for prometheus', (done) => {
    fetch('http://localhost:8080/metrics')
        .then(res => {
            expect(res.ok).toBe(true)
            done()
        })
        .catch(err => console.error(err))
})
