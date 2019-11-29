const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'),
  filename: 'index.html'
})

module.exports = {
  mode: 'production',
  
  plugins: [
    htmlPlugin
  ],
  // 所有第三方配置
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use:{loader: 'babel-loader'} ,
        exclude: '/node_modules/'
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] ,
        exclude: '/node_modules/'
      }
    ]
  },

  resolve: {
    // import时省去文件后缀名
    extensions: ['.js', '.jsx'],
    // 设置根目录
    alias: {
      '@': path.join(__dirname, './src')
    }
  },

  performance: {
    hints:false
  }
}