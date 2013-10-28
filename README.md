# rautc

Autocomplete strategy with Redis and [Trie](http://en.wikipedia.org/wiki/Trie)

## Usage

```javascript
var Rautc = require("rautc");
var rautc = new Rautc(yourRedisConnection);

// addIndex(key, index, data, callback)
rautc.addIndex("usernames", 'freddy', 'Freddy:1:male', callback);
rautc.addIndex("usernames", 'john', 'John:2:male', callback);
rautc.addIndex("usernames", 'suzan', 'SuZaN:3:female', callback);
rautc.addIndex("usernames", 'fred', 'Fred:4:male', callback);

// searchBy(key, searchBy, limit, callback)
rautc.searchBy("usernames", "fre", 2, function(err, results) {
  // ['Fred:4:male', 'Freddy:1:male']
  ...
});
```
