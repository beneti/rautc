# rautc

Autocomplete strategy with Redis and [Trie](http://en.wikipedia.org/wiki/Trie)

## Usage

```javascript
var Rautc = require("rautc");
var rautc = new Rautc(yourRedisConnection);

// addIndex(key, index, data, callback)
rautc.addIndex("usernames", 'freddy', 'Freddy:1:male', 0, callback);
rautc.addIndex("usernames", 'john', 'John:2:male', 0, callback);
rautc.addIndex("usernames", 'suzan', 'SuZaN:3:female', 0, callback);
rautc.addIndex("usernames", 'fred', 'Fred:4:male', 0, callback);
rautc.addIndex("usernames", 'fredie', 'Fredie:5:male', callback); //without score. default -> score:0

// searchBy(key, searchBy, callback) //without options. defaults -> limit: 0, sort: 'asc'
rautc.searchBy("usernames", "fre", function(err, results) {
  // ['Fred:4:male', 'Freddy:1:male', 'Fredie:5:male']
  ...
});

// searchBy(key, searchBy, options, callback)
var options = {limit: 2}
rautc.searchBy("usernames", "fre", options, function(err, results) {
  // ['Fred:4:male', 'Freddy:1:male']
  ...
});

// searchBy(key, searchBy, options, callback)
var options = {limit: 2, sort: 'desc'}
rautc.searchBy("usernames", "fre", options, function(err, results) {
  // ['Freddy:1:male', 'Fred:4:male']
  ...
});
// searchBy(key, searchBy, options, callback)
var options = {limit: 2, withscores: true}
rautc.searchBy("usernames", "fre", options, function(err, results) {
  // ['Fred:4:male', '0', 'Freddy:1:male', '0']
  ...
});

// searchBy(key, searchBy, options, callback)
var options = {limit: 2, sort: 'desc', withscores: true}
rautc.searchBy("usernames", "fre", options, function(err, results) {
  // ['Freddy:1:male', '0', 'Fred:4:male', '0']
  ...
});
```
