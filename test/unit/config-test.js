'use strict'

const expect = require('chai').expect;
const config = require('../../src/config');

describe('config', () => {
  it('should have a default rpc port of 0', () => {
    const settings = config();
    expect(settings.rpc_port).to.equal(0);
  });

  it('should default rpc host to localhost', () => {
    const settings = config();
    expect(settings.rpc_host).to.equal("127.0.0.1");
  });

});
