const path = require('path');
const ENTRY = path.resplve(__dirname, 'src', 'index.js');


module.exports = {
  mode: 'development',
  entry: ENTRY,
  output: {
    filename: '.js',
    path: path.resolve(__dirname, './public'),
  }
}