'use strict';

var async = require('async');

function Rautc(client) {
  this.client = client;
}

Rautc.prototype.addIndex = function(key, index, data, callback){
  var self = this;
  async.times(index.length, function(n, asyncCallback){
    var keyToSet = key + ':' + index.slice(0, n+1).toLowerCase();
    self.client.zadd(keyToSet, 0, data, asyncCallback);
  }, callback);
};

Rautc.prototype.searchBy = function(key, searchBy, limit, callback){
  var keyToSearch = key + ':' + searchBy.toLowerCase();
  this.client.zrange(keyToSearch, 0, limit, callback);
};

module.exports = Rautc;
