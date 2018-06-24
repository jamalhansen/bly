'use strict'

const expect = require('chai').expect;
const FetchUrl = require('./fetch-url-fake');

describe('fake fetch', () => {
  it('should return values I want when I tell it to succeed', done => {
    const ff = new FetchUrl(true, "Elvis");
    let result = "";
    ff.fetch("some-url", x => result = x, null); 
    expect(result).to.equal("Elvis");
    done();
  });

  it('should return values I want when I tell it to error', done => {
    const ff = new FetchUrl(false, "Lives!");
    let result = "";
    ff.fetch("some-url", null, x => result = x); 
    expect(result).to.equal("Lives!");
    done();
  });
});
