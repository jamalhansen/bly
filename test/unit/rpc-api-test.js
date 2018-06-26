'use strict'

const expect = require('chai').expect;
const fetchMock = require('fetch-mock');
const rpc = require('../../src/rpc-api').rpc;

describe('RPC API module', () => {
  it('should get connection count', async () => {
    fetchMock.post('http://127.0.0.1', { result: 4 });

    const response = await rpc("http://127.0.0.1", "getconnectioncount")
    expect(response.result).to.equal(4);

    fetchMock.restore();
  });
});
