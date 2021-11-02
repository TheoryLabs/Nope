const Path = require('path')

const {
  resolve: ResolvePath,
  join: toPath
} = Path

console.log(Path)

const CURRENT_PATH = __dirname
const MAIN_FILENAME = `index.js`




require = require('esm')(module)
module.exports = require('../')