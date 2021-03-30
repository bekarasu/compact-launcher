const path = require('path')
const nodeExternals = require('webpack-node-externals')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const translateEnvToMode = (env) => {
  if (env === 'production') {
    return 'production'
  }
  return 'development'
}

module.exports = (env) => {
  return {
    target: 'electron-renderer',
    mode: translateEnvToMode(env),
    node: {
      __dirname: false,
      __filename: false,
    },
    entry: {
      background: './src/background.js',
      app: './src/views/app.js',
      collapsed: './src/views/collapsed.js',
      expanded: './src/views/expanded.js',
      settings: './src/views/settings.js',
      tools: './src/views/tools.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../app'),
    },
    externals: [nodeExternals()],
    resolve: {
      alias: {
        env: path.resolve(__dirname, `../config/env_${env}.json`),
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        }
      ],
    },
    plugins: [
      new FriendlyErrorsWebpackPlugin({
        clearConsole: env === 'development',
      }),
    ],
  }
}
