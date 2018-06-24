'use strict'

class FetchUrl {
  constructor(_succeed, _value) {
    this._succeed = _succeed;
    this._value = _value;
  }

  fetch(url, cb, err) {
    if(this._succeed) {
      cb(this._value);
    } else {
      err(this._value);
    }
  }
}

module.exports = FetchUrl;


