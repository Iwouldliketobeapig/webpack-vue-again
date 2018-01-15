const webpack = require('webpack');
const chalk = require('chalk');
class CommonsChunkPlugin extends webpack.optimize.CommonsChunkPlugin {
  constructor(_chunksBegin ,...arg) {
    super(...arg);
    this._chunksBegin = _chunksBegin;
  }

  apply (compiler) {
    super.apply(compiler);
  }

  getTargetChunks(allChunks, compilation, chunkNames, children, asyncOption) {
    const asyncOrNoSelectedChunk = children || asyncOption;
		if(chunkNames) {
			const allChunksNameMap = allChunks.reduce((map, chunk) => {
				if(chunk.name) {
					map.set(chunk.name, chunk);
				}
				return map;
			}, new Map());

      let returnChunks =  chunkNames.map(chunkName => {
				if(allChunksNameMap.has(chunkName)) {
					return allChunksNameMap.get(chunkName);
        }
				return compilation.addChunk(chunkName);
      });
      returnChunks.forEach(chunk => {
        this.consoleChunks(chunk.entryModule);
      })
      return returnChunks;
		}

		if(asyncOrNoSelectedChunk) {
			return allChunks;
		}

		throw new Error(`You did not specify any valid target chunk settings.
Take a look at the "name"/"names" or async/children option.`);
  }
  
  consoleChunks (multiModule) {
    let dependencies = multiModule.dependencies.slice(this._chunksBegin),
        name = multiModule.name,
        chunks = dependencies.map(x => x.userRequest);
    console.log(name + ': ' + chalk.yellow(chunks.join(', ')));
  }
}

module.exports = CommonsChunkPlugin;