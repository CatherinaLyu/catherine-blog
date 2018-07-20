let path = require('path');
let webpack = require('webpack');
let cleanWebpackPlugin = require('clean-webpack-plugin');
let extractTextPlugin = require('extract-text-webpack-plugin');
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const isProd = env === 'production';
  return {
    entry: {
      home: './src/static/js/main.ts',
    },
    output: {
      filename: isProd ? 'js/[name].[hash:8].bundle.js': 'js/[name].bundle.js',
      path: path.resolve(__dirname, 'build'),
      // publicPath: isProd ? ''
      chunkFilename: isProd ? 'js/[name].[chunkhash:8].chunk.js' : 'js/[name].bundle.js',
    },
    mode: env,
    devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
    resolve: {
      extensions: ['.js', '.jsx', '.json', '*'],
    },
    module: {
      rules: [{
        test: /\.js|jsx$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-0'],
            plugins: [
              'transform-decorators-legacy',
              ['transform-runtime', {
                polyfill: false,
                regenerator: true
              }],
            ]
          },
        }],
      }, {
        test: /\.css/,
        use: extractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      }, {
        test: /\.less$/,
        use: extractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: { url: false }
          }, {
            loader: 'less-loader',
            options: { compress: true }
          }],
          fallback: 'style-loader'
        })
      }, {
        test: /\.(png|jpg|gif|jpeg|otf|eot|svg|ttf|woff|woff2)(\?\S+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '/asset/[hash:8].[ext]',
          }
        }],
      }],
    },
    plugins: [
      new htmlWebpackPlugin({
        chunks: ['home'],
        template: './src/page/template.html',
        filename: '../../page/home.html',
        favicon: './src/static/images/favicon.ico',
      }),
      new extractTextPlugin({
        filename:'styles/[name].[hash:8].css',
        allChunks: true
      }),
      new cleanWebpackPlugin(['build'], {
        root: path.resolve(__dirname),
        verbose: true,
        watch: false
      }),
      new VueLoaderPlugin()
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: 'all',
            minChunks: 2,
            priority: -20,
            maxInitialRequests: 5,
            minSize: 0,
            name: 'common'
          },
          module: {
            chunks: 'all',
            minChunks: 2,
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'module'
          },
          // antd: {
          //   chunks: 'all',
          //   minChunks: 2,
          //   test: /antd/,
          //   priority: -5,
          //   name: 'antd'
          // },
          react: {
            chunks: 'all',
            minChunks: 2,
            test: /react/,
            priority: -5,
            name: 'react'
          },
          underscore: {
            chunks: 'all',
            minChunks: 2,
            test: /underscore/,
            priority: -5,
            name: 'underscore'
          }
        }
      }
    },
    stats: {
      version: false,
      source: false,
      reasons: false,
      modules: false,
      hash: false,
      timings: false,
      chunkOrigins: false,
      cachedAssets: false,
      moduleTrace: false,
      children: false,
      chunks: false
    }
  };
  
};