'use strict'

const expect = require('chai').expect;
const FetchUrl = require('./fetch-url-fake');

describe('fake fetch', () => {
  it('should return values I want', done => {
    const ff = new FetchUrl(true, "Elvis");
    let result = ""
    ff.fetch("some-url", x => result = x, null); 
    expect(result).to.equal("Elvis");
    done();
  });
});
