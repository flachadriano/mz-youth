module.exports = {
    entry: "./app/index.js",
    output: {
        filename: "./../public/bundle.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".jsx", ".js"]
    }
};