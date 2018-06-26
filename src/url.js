'use strict'

const url = (call, params) => {
  return `http://${params.username}:${params.password}@${params.address}:${params.port}/api/${call}`;
}

module.exports = url;
