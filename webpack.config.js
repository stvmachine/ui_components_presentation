/* eslint-disable */

var path = require('path');
var webpack = require('webpack');
var rehypePrism = require('@mapbox/rehype-prism');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    '@babel/polyfill',
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdown-loader',

            options: {
              gfm: false
            }
          }
        ]
      },
      {
        test: /(\.mdx?)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-object-rest-spread'
              ],
              presets: ['@babel/preset-react']
            }
          },
          {
            loader: '@mdx-js/loader',
            options: {
              hastPlugins: [rehypePrism]
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        include: __dirname
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'raw-loader'
          }
        ],
        include: __dirname
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              limit: 10000,
              mimetype: 'image/svg+xml'
            }
          }
        ],
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              mimetype: 'image/png'
            }
          }
        ],
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.gif$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              mimetype: 'image/gif'
            }
          }
        ],
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              mimetype: 'image/jpg'
            }
          }
        ],
        include: path.join(__dirname, 'assets')
      }
    ]
  }
};
