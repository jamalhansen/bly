'use strict'

const expect = require('chai').expect;
const url = require('../../src/url');

const test_p = {
  "username": "a",
  "password": "b",
  "address": "c",
  "port": 2,
};

describe('url', () => {
  it('should emit the url for a specific rpc call', () => {
    const result = url('getConnectionCount', test_p);
    expect(result).to.equal("http://a:b@c:2/api/getConnectionCount");
  });
});
