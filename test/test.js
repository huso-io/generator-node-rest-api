'use strict';

import request from 'supertest';
import { assert } from 'chai';
import app from '../bin/app';

app();

let protocol = 'http';

setTimeout(function() {

  describe('/example', () => {
    it('example rest api', (done) => {
      request(protocol + '://localhost:9323')
        .post('/example')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          assert.equal(
            res.body.msg,
            'Example: hello world'
          );
          done();
        });
    });
  });

  run();
}, 1500);
