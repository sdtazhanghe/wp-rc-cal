const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, '../node_modules')
            }
        ]
    },
    devtool: 'inline-source-map'
};
