var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

const config = {
  entry: "./app/client.js",
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  devtool: debug ? "inline-sourcemap" : null,
  // devtool: 'eval',
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: {
      index: '/static/'
    }
  },
  module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
          }
        },
        {
          test: /\.css/,
          loaders: [
            'style?singleton',
            'css'
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg|woff|woff?2|eot|ttf)$/i,
          loader: "file-loader?name=/public/icons/[name].[ext]"
        }
      ]
    },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './app/template/index.html'
    }),
    new CopyWebpackPlugin([{
      from: 'public/style/images',
      to: 'images'
    }, {
      from: 'public/style/fonts',
      to: 'fonts'
    }
  ])
  ],
  resolve: {
    modulesDirectories: [
      'app',
      'node_modules'
    ]
  }
};

module.exports = config;
