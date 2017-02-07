
module.exports = {
    entry: {
        notifyBrowser: './src/notify-browser.js',
    },
    output: {
        path: "./dist",
        filename: "[name].bundle.js",
        library: 'notifyBrowser',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.json$/, exclude: /node_modules/, loader: 'json-loader'}
        ]
    },
};
