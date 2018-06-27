'use strict'

const path = require('path');
const expect = require('chai').expect;
const defaults = require('../../src/config').defaults;
const locate = require('../../src/config').locate;
const config = require('../../src/config').config;

describe('config defaults', () => {
  it('should have a default rpc port of 0', () => {
    const settings = defaults();
    expect(settings.rpc_port).to.equal(0);
  });

  it('should default rpc host to localhost', () => {
    const settings = defaults();
    expect(settings.rpc_host).to.equal("127.0.0.1");
  });

  it('should default rpc user to username', () => {
    const settings = defaults();
    expect(settings.rpc_user).to.equal("username");
  });

  it('should default rpc password to password', () => {
    const settings = defaults();
    expect(settings.rpc_pass).to.equal("password");
  });
});

describe('config location', () => {
  it('should default to ~/.bly/config.json', () => {
    const file_n_path = locate()();
    expect(file_n_path).to.equal('~/.bly/config.json');
  });

  it('should allow default to be overridden', () => {
    const file_n_path = locate("the moon")();
    expect(file_n_path).to.equal("the moon");
  });
});

describe('config', () => {
  it('should give default config by default', async () => {
    const settings = await config();
    expect(settings.rpc_port).to.equal(0);
    expect(settings.rpc_host).to.equal("127.0.0.1");
    expect(settings.rpc_user).to.equal("username");
    expect(settings.rpc_pass).to.equal("password");
  });

  it('should allow default path to be overridden', async () => {
    const test_config = path.join(__dirname, "..", "data", "settings.test.json");
    const settings = await config(x => test_config);
    expect(settings.rpc_port).to.equal(9325);
    expect(settings.rpc_host).to.equal("http://example.com");
    expect(settings.rpc_user).to.equal("rpcuser");
    expect(settings.rpc_pass).to.equal("rpcpass");
  });

  it('should fill missing settings with defaults', async () => {
    const part_config = path.join(__dirname, "..", "data", "partial-settings.test.json");
    const settings = await config(x => part_config);
    expect(settings.rpc_port).to.equal(0);
    expect(settings.rpc_host).to.equal("127.0.0.1");
    expect(settings.rpc_user).to.equal("rpcuser");
    expect(settings.rpc_pass).to.equal("rpcpass");
  });
});
