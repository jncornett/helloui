import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './src/index.jsx'
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
              [ 'env', { modules: false } ],
              'stage-0',
              'react'
            ],
            plugins: [ 'react-hot-loader/babel' ]
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
          options: {
            emitWarning: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new webpack.ProvidePlugin({
      React: 'react',
      Component: ['react', 'Component'],
      PropTypes: 'prop-types'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}