const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { triggerAsyncId } = require('async_hooks');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
});

module.exports = () => {
  process.env.NODE_ENV = process.env.ENV || 'development';
  const isProd = process.env.NODE_ENV === 'production';
  const envLocation = `./src/env/env.${process.env.NODE_ENV}`;
  const env = require(envLocation);
  const envPath = path.join(__dirname, envLocation);

  return {
    entry: './src/index.tsx',
    mode: isProd ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: '/node_modules',
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    plugins: [htmlPlugin],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      compress: true,
      port: 3000,
    },
  };
};
