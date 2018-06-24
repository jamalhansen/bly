'use strict'

class FetchUrl {
  fetch(url, cb, err) {
    fetch(url).then(r => r.json())
      .then(cb)
      .catch(err)
  }
}

module.exports = FetchUrl;


