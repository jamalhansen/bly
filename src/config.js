'use strict'

const path = require('path');
const readFile = require('./file-utils').readFile;

const default_config_path = "~/.bly";
const config_file = "config.json";
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
  return path.join(x || default_config_path, config_file);
};

const config = f => {
  const config_file = f ? f : locate();
  return readFile(config_file())
    .then(x => JSON.parse(x))
    .then(x => Object.assign({}, default_settings, x))
};

module.exports = {
  "defaults" : defaults,
  "locate" : locate,
  "config" : config,
};
