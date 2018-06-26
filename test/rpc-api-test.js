'use strict'

const expect = require('chai').expect;
const fetchMock = require('fetch-mock');
const rpc = require('../src/rpc-api').rpc;

describe('RPC API module', () => {
  it('should get connection count', async () => {
    fetchMock.mock('*', { result: 4});

    const response = await rpc("http://127.0.0.1", "getconnectioncount")
    console.log(response.result);
    expect(response.result).to.equal(4);

    fetchMock.restore();
  });
});
