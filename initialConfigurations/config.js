const loadash = require('lodash'),
  fs = require('fs'),
  path = require('path');

const loadConfig = (filePath) => fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf-8')) : {};
const configDir = process.env.CONFIG_DIR || path.resolve('./config');
const environment = process.env.NODE_ENV || 'development';
const defaultConfig = loadConfig(path.resolve(configDir, 'default.json'));
const envConfig = loadash.merge({}, loadConfig(path.resolve(configDir, `${environment}.json`)), loadConfig(path.resolve(`../${environment}.json`)));
const config = loadash.merge({}, defaultConfig, envConfig);
module.exports = config;
