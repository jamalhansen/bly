'use strict'

const readFile = require('./file-utils').readFile;

const default_config_file_n_path = "~/.bly/config.json";
const default_settings = {
  "rpc_host" : "127.0.0.1",
  "rpc_port" : 0,
  "rpc_user" : "username",
  "rpc_pass" : "password",
};

const defaults = () => {
  return default_settings
};

const locate = x => () => {
  return x || default_config_file_n_path;
};

const config = f => {
  if(f) {
    return readFile(f())
      .then(x => JSON.parse(x))
      .then(x => Object.assign({}, default_settings, x))
  } else {
    return new Promise((resolve) => {
      try {
        resolve(defaults());
      }
      catch(e) {
        reject(e.message);
      }
    });
  };

};

module.exports = {
  "defaults" : defaults,
  "locate" : locate,
  "config" : config,
};
