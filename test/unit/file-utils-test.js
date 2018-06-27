'use strict'

const expect = require('chai').expect;
const utils = require('../../src/file-utils');
const path = require('path');

describe('file utils', () => {
  it('should read a file', async () => {
    const contents = await utils.readFile(path.join(__dirname, "..", "data", "foo"));
    expect(contents.toString()).to.equal("bar\n");
  });

  it('should error if file does not exist', (done) => {
    utils.readFile("not-a-file")
      .catch(err => {
        expect(err.message).to.equal("ENOENT: no such file or directory, open 'not-a-file'");
      }).then(done, done);
  });
});
