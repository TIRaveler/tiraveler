const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve('client/dist'),
    filename: 'bundle.js',
  },

  externals: {
    react: 'React',
    jquery: 'jQuery',
    'prop-types': 'PropTypes',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
    'semantic-ui-react': 'semanticUIReact',
  },

  module: {
    rules: [
      // ES6 / React
      {
        exclude: /node_modules/,
        include: path.resolve('client/src'),
        test: /\.jsx$|\.js$/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      // Semantic UI LESS
      {
        // Less files
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        // Images
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
        use: 'file-loader?name=[name].[ext]?[hash]',
      },

      {
        // Font
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        // Font
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        // Font
        test: /\.otf(\?.*)?$/,
        use: 'file-loader?name=/fonts/[name].  [ext]&mimetype=application/font-otf',
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],


  resolve: {
    alias: {
      '../../theme.config$': path.join(__dirname, 'semantic/theme.config'),
    },
    extensions: ['.js', '.jsx'],
  },
};
