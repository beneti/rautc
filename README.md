# rautc

Autocomplete strategy using Redis

## Usage

```javascript
var Rautc = require("rautc");
var rautc = new Rautc(yourRedisConnection);

// addIndex(key, index, data, callback)
rautc.addIndex("usernames", 'fred', 'Freddy:1:male', callback);
rautc.addIndex("usernames", 'john', 'John:2:male', callback);
rautc.addIndex("usernames", 'suzan', 'SuZaN:3:female', callback);
rautc.addIndex("usernames", 'fred', 'Fred:4:male', callback);

// searchBy(key, searchBy, limit, callback)
rautc.searchBy("fre", function(err, results) {
  // ['Freddy:1:male', 'Fred:4:male']
  ...
});
```
