const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'dist')
}

module.exports = {
  entry: {
    main: PATHS.app + '/index.js'
  },
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.jsx?$/, exclude: '/node_modules/', loader: 'babel-loader' },
      { test: /\.svg$/, loader: 'svg-url-loader' },
      {test: /\.(jpg|png)$/,loader: 'file?name=[path][name].[hash].[ext]'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.app + '/index.html',
      title: 'Weatherly',
      inject: 'body'
    })
  ],
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json', '.jsx']
  }
}
