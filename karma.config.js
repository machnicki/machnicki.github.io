const argv = require('yargs').argv;
const path = require('path');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: !argv.watch,
    frameworks: ['mocha', 'chai'],
    reporters: ['spec', 'coverage'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './test/**/*.js'
    ],
    preprocessors: {
      ['./test/**/*.js']: ['webpack', 'sourcemap']
    },
    webpack: {
       devtool: 'inline-source-map',
       resolve: {
        root: path.resolve(__dirname, './src'),
        extensions: ['', '.js', '.jsx'],
        alias: {
          'sinon': 'sinon/pkg/sinon'
        }
      },
      module: {
        noParse: [
          /node_modules\/sinon\//
        ],
        loaders: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
        ],
        postLoaders: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(test|node_modules)\//,
            loader: 'istanbul-instrumenter'
          }
        ],
      },
      externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window'
      },
    },
    webpackMiddleware: {
      noInfo: true
    },
    webpackServer: {
      noInfo: true,
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
    },
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ]
  });
};
