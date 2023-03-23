const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: "development",
  output: {assetModuleFilename: "[name] [text]"
},
performance: {
  hints: false,
  maxAssetSize: 512000,
  maxEntrypointSize: 512000
},
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: "assets/resource"
      }
    ]
},
plugins: [
  new htmlWebpackPlugin({
    title: "Shelter",
    filename: "index.html",
    template: "src/index.html"
  })
]
}