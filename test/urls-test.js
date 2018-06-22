'use strict'

const expect = require('chai').expect;
const urls = require('../src/urls');

describe('urls module', () => {
  it('should initialize the username', () => {
    urls.init({"username": "user"});
    expect(urls.username).to.equal("user");
  });
  it('should initialize the password', () => {
    urls.init({"password": "pass"});
    expect(urls.password).to.equal("pass");
  });
  it('should initialize the port', () => {
    urls.init({"port": 124});
    expect(urls.port).to.equal(124);
  });
});
