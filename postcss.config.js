module.exports = {
  plugins: [require('autoprefixer'), require('css-mqpacker')({ sort: require('./postcss/cssMqPackerSort') })],
}
