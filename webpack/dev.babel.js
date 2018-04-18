import webpack from 'webpack'
import HtmlPlugin from 'html-webpack-plugin'

import config from '../config.json'

export default {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './src/hmr-index'
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
            ],
            plugins: [
              'react-hot-loader/babel'
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
          options: { emitWarning: true }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
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
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  devtool: 'cheap-module-eval-source-map'
}
