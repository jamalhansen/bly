'use strict'

const expect = require('chai').expect;
const RpcApi = require('../src/rpc-api');
const Fetch = require('./fetch-url-fake');

describe('RPC API module', () => {
  it('should not require arguments to its constructor', () => {
    const api = new RpcApi();
    expect(typeof api).to.equal("object");
  });

  it('should allow FetchUrl to be passed to it', () => {
    const api = new RpcApi();
    api.init({ fetch: "yogurt" });
    expect(api.fetch).to.equal("yogurt");
  });

  it('should allow Urls to be passed to it', () => {
    const api = new RpcApi();
    api.init({ url: "frozen" });
    expect(api.url).to.equal("frozen");
  });

  it('should validate that it is ready', () => {
    const api = new RpcApi();
    const result = api.init({ url: "abba", fetch: "zabba" });
    expect(result).to.be.true;
  });

  it('should inform that it is not ready', () => {
    const api = new RpcApi();
    const result = api.init({ thats: "abba", so: "zabba" });
    expect(result).to.be.false;
  });

  it('should get with fake fetch', (done) => {
    const api = new RpcApi();
    const fetch = new Fetch(true, 'fake');
    let result = "";
    api.init({ "fetch": fetch, "url": "http://127.0.0.1:34" });
    api.get("getConnectionCount", x => result = x);
    expect(result).to.equal('fake');
    done();
  });
});
