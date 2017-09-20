var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
    entry: APP_DIR+"/index.jsx",
    output: {
        filename: "./../public/bundle.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".jsx", ".js"]
    },
    module : {
        loaders : [
          {
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel-loader'
          }
        ]
      }
};