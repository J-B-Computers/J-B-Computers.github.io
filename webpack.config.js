// webpack.config.js

const path = require('path');

module.exports = {
  entry: './scripts/main.js', // Entry point for the application
  output: {
    filename: 'bundle.js', // Output bundled file
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transform JavaScript files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel loader for ES6+ syntax
        }
      },
      {
        test: /\.less$/, // Transform LESS files
        use: [
          'style-loader', // Inject CSS into the DOM
          'css-loader', // Interpret @import and url() like import/require()
          'less-loader' // Compile LESS to CSS
        ]
      }
    ]
  },
  mode: 'development' // Set mode to development
};
