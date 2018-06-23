'use strict'

const expect = require('chai').expect;
const Urls = require('../src/urls');

const test_p = {
  "username": "a",
  "password": "b",
  "address": "c",
  "port": 2,
};

describe('urls module', () => {
  it('should initialize the username', () => {
    const u = new Urls;
    u.init({"username": "user"});
    expect(u.username).to.equal("user");
  });

  it('should initialize the password', () => {
    const u = new Urls;
    u.init({"password": "pass"});
    expect(u.password).to.equal("pass");
  });

  it('should initialize the port', () => {
    const u = new Urls;
    u.init({"port": 124});
    expect(u.port).to.equal(124);
  });

  it('should initialize the address', () => {
    const u = new Urls;
    u.init({"address": "127.0.0.1"});
    expect(u.address).to.equal("127.0.0.1");
  });

  it('should return false if proper parameters are not provided', () => {
    const u = new Urls;
    const result = u.init({"woo": "hoo"});
    expect(result).to.be.false;
  });

  it('should return true if proper parameters are provided', () => {
    const u = new Urls;
    const result = u.init(test_p);
    expect(result).to.be.true;
  });

  it('should return false if port is not a number', () => {
    const u = new Urls;
    const result = u.init({
      "username": "a",
      "password": "b",
      "port": "c",
    });
    expect(result).to.be.false;
  });

  it('should emit the url for rpc calls', () => {
    const u = new Urls;
    u.init(test_p);
    const result = u.rpcUrl();
    expect(result).to.equal("http://a:b@c:2");
  });
});
