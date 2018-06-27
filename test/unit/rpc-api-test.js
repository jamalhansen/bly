'use strict'

const expect = require('chai').expect;
const fetchMock = require('fetch-mock');
const rpc = require('../../src/rpc-api');
const readFile = require('../test-helpers').readFile;

describe('RPC API', () => {
  it('should get connection count', async () => {
    fetchMock.post('http://127.0.0.1', { result: 4 });

    const response = await rpc("http://127.0.0.1", "getconnectioncount")
    expect(response.result).to.equal(4);

    fetchMock.restore();
  });

  it('should get info', async () => {
    const info = await readFile('getinfo', 'utf8')

    fetchMock.post('http://127.0.0.1', info);

    const response = await rpc("http://127.0.0.1", "getinfo")
    expect(response).to.deep.equal(JSON.parse(info));

    fetchMock.restore();
  });
});
