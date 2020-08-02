const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isDev = env.NODE_ENV === 'development';

  return {
    mode: env.NODE_ENV,
    entry: {
      carousel: ['./lib/src/carousel.ts', './lib/src/styles/index.scss'],
      main: './src/index.ts'
    },
    devtool: isDev && 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // fallback to style-loader in development
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css'
      })
    ],
    resolve: {
      extensions: ['.ts', '.js']
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    }
  };
};
