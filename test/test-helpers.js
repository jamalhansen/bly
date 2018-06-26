'use strict'

const fs = require('fs');
const path = require('path')

const readFile = (filename, enc) => {
  const file = path.resolve(__dirname, 'data', `${filename}`);
  return new Promise((fulfill, reject) => {
    fs.readFile(file, enc, (err, res) => {
      if (err) reject(err);
      else fulfill(res);
    });
  });
}

module.exports = { readFile : readFile };
