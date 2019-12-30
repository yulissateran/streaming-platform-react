const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: [
      '.js', '.jsx'
    ]
  }, module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        // test: /\.(png|gif|jpg)$/,
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options:{
              name : 'assets/[hash].[ext]'
            }
          }
        ],
      }
    ]
  },
  devServer:{
    historyApiFallback:true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExractPlugin({
      filename:'assets/[name].css'
    })
  ]
}