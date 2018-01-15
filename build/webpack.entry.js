const glob = require('glob');
const assert = require('assert');

function sourceMap () {
  const maps = {};
  glob.sync(`./src/modules/**/index.js`).forEach(function (url) {
    const ret = url.match(`./src\/modules\/(.*).js$`);
    assert(ret);

    maps[ret[1]] = ret[0];
  });
  return maps;
};

module.exports = sourceMap();