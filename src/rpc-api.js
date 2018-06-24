'use strict'

class RpcApi {
  init(parms) {
    this.fetch = parms.fetch;
    this.url = parms.url;

    return this.validate();
  }  

  validate() {
    return !!this.fetch &&
           !!this.url;
  }

  get(call, cb, err) {
    this.fetch.fetch(`${this.url}/api/${call}`, cb, err);
  }
}

module.exports = RpcApi;
