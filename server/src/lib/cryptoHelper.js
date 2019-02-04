

'use strict';

const crypto = require('crypto'),
  MCrypt = require('mcrypt').MCrypt,
  iconv = require('iconv-lite'),
  ord = require('locutus/php/strings/ord'),
  str_repeat = require('locutus/php/strings/str_repeat'),
  chr = require('locutus/php/strings/chr');

const base64Decode = function (valueToDecode) {

  return new Buffer(valueToDecode, 'base64').toString('ascii');

};

const base64Encode = function (valueToEncode) {

  return new Buffer(valueToEncode).toString('base64');

};

const createHash = function (valueToEncode, algorithm) {

  return crypto.createHash(algorithm).update(valueToEncode).digest('hex');

};

const createCipher = function (data, key) {

  const cipher = new MCrypt('rijndael-128', 'ecb');
  const blockSize = cipher.getBlockSize();
  const pad = blockSize - (data.length % blockSize);
  data += str_repeat(chr(pad), pad);
  cipher.open(key);
  const result = cipher.encrypt(data);

  return result;

};

const createDecipher = function (data, key) {

  // Decrypt the response body with Rijndael 128 in ECB mode. + Removing padding
  const decipher = new MCrypt('rijndael-128', 'ecb');
  decipher.open(key);
  const result = decipher.decrypt(Buffer.from(data, 'base64'));
  const pad = ord(result.toString()[result.toString().length - 1]);
  return result.toString().substring(0, result.length - pad);

};


exports.base64Decode = base64Decode;
exports.base64Encode = base64Encode;
exports.createCipher = createCipher;
exports.createDecipher = createDecipher;
exports.createHash = createHash;
