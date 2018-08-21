const express = require('express');
const webpack = require('webpack');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

// Enable hot module replacement
app.use(require('webpack-hot-middleware')(compiler));

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});