'use strict';

var async = require('async');

function Rautc(client) {
  this.client = client;
}

Rautc.prototype.addIndex = function(key, index, data, score, callback){
  var self = this;

  if(arguments.length === 4) {
    score = 0;
    callback = arguments[3];
  }

  async.times(index.length, function(pos, asyncCallback){
    var keyToSet = key + ':' + index.slice(0, pos + 1).toLowerCase();
    self.client.zadd(keyToSet, score, data, asyncCallback);
  }, callback);
};

Rautc.prototype.searchBy = function(key, searchBy, options, callback){
  if(arguments.length === 3) {
    options = {};
    callback = arguments[2];
  }

  var keyToSearch = key + ':' + searchBy.toLowerCase();
  var limit = options.limit || 0;
  var withscores = options.withscores;
  var sort = options.sort || 'asc';
  sort = sort.toLowerCase();

  var params = [keyToSearch, 0, limit - 1];

  if(withscores) params.push('withscores');

  if(sort === 'desc')
    this.client.zrevrange(params, callback);
  else
    this.client.zrange(params, callback);
};

module.exports = Rautc;
