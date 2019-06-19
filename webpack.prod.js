 const webpack = require('webpack');
  const merge = require('webpack-merge');
  const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
  const common = require('./webpack.common.js');

  module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
      new UglifyJSPlugin({
        sourceMap: true
 
     }),
     new webpack.DefinePlugin({
    // 指定环境
       'process.env.NODE_ENV': JSON.stringify('production')
     })
    ]
  });