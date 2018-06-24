'use strict'

class Urls {
  init(params) {
    this.address = params.address;
    this.username = params.username;
    this.password = params.password;
    this.port = params.port;
    
    return this.validate();
  }

  validate() {
    return !!this.username && 
           !!this.password && 
           !!this.port && 
           !!this.address &&
           !isNaN(this.port);
  }

  rpcUrl() {
    return `http://${this.username}:${this.password}@${this.address}:${this.port}`;
  }
}

module.exports = Urls;
