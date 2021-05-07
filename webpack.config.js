const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "/shop/src/dev/js/theme.js"),
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          type: 'css/mini-extract'
        }
      }
    }
  },
  output: {
    path: path.join(__dirname, "/shop/dist/assets"),
    filename: '[name].min.js'
  },
  plugins: [
    new ESLintPlugin({
      context: 'shop/src',
      files: ['**/*.js'],
      failOnError: false
    }),
    new MiniCssExtractPlugin({ 
      filename: '[name].min.css'
    }), 
    new StyleLintPlugin({
      configFile: '.stylelintrc.json',
      context: 'shop/src',
      files: ['**/*.css', '**/*.scss'],
      failOnError: false
    })
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
  },
  watch: true,
};
