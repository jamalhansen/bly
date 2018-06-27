'use strict'

const path = require('path')
const readFile= require('../src/file-utils').readFile;

const loadData = (filename) => {
  const file = path.resolve(__dirname, 'data', `${filename}`);
  return readFile(file, 'utf8');
}

module.exports = { loadData : loadData };
