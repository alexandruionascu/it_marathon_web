module.exports = {
  entry: [
    './src/Home.js'
  ],
  output: {
    path: __dirname,
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [{
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
    }]
  }
};
