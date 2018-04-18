import webpack from 'webpack'
import HtmlPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import MinifyPlugin from 'babel-minify-webpack-plugin'

import config from '../config.json'

export default {
  mode: 'production',
  entry: [
    'babel-polyfill',
    './src/index'
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [ 'env', { targets: { browsers: config.browserTargets } } ],
              'stage-0',
              'react'
            ]
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
          options: { failOnError: true }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: "file-loader" }
    ]
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: { chunks: 'all' }
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }),
    new webpack.ProvidePlugin(config.globals),
    new HtmlPlugin({ template: './src/index.html' }),
    new ExtractTextPlugin('style.css'),
    new MinifyPlugin({}, { test: /\.jsx?$/ })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
