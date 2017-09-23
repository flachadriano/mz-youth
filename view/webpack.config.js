var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'app');
var APP_URL = process.env.NODE_ENV == 'production' ? 'http://localhost:3000/' : 'https://mzyouth.herokuapp.com/';

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
    },
    plugins: [
        new webpack.DefinePlugin({
            __API__: APP_URL
        })
    ]
};