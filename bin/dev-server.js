/**
 * Created by ZhangHe on 2018/8/8.
 */
'use strict';

const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack/webpack.config');
const webpack = require('webpack');
const path = require('path');
const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, '../'),//默认会以根文件夹提供本地服务器，这里指定文件夹
    historyApiFallback: true,
    port: 9090,
    publicPath: '/'
});

server.listen(9090, 'localhost', function (err) {
    if (err) throw err
});