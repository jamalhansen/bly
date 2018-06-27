'use strict'

const fs = require('fs');

const readFile = (filename, enc) => {
  return new Promise((fulfill, reject) => {
    fs.readFile(filename, enc, (err, res) => {
      if (err) reject(err);
      else fulfill(res);
    });
  });
}

module.exports = { readFile : readFile };
