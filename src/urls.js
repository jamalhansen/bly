'use strict'

class Urls {
  init(params) {
    this.username = params.username;
    this.password = params.password;
    this.port = params.port;

    return this.validate();
  }

  validate() {
    return !!this.username && 
           !!this.password && 
           !!this.port && 
           !isNaN(this.port);
  }
}

module.exports = Urls;
