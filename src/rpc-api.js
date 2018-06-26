'use strict'

require('es6-promise').polyfill();
require("isomorphic-fetch");

const rpc = (url, call) => {
  return fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "jsonrpc":"1.0",
      "id":"bly",
      "method":call,
      "params":[]
    })
  }).then(result => result.json());
}

module.exports = rpc;
