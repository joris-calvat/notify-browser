
module.exports = {
    entry: {
        pdpPushDesktop: './src/pdp-push-desktop.js',
    },
    output: {
        path: "./dist",
        filename: "[name].bundle.js",
        library: 'pdpPushDesktop',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.json$/, exclude: /node_modules/, loader: 'json-loader'}
        ]
    },
};
