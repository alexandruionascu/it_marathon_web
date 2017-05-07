module.exports = {
  entry: {
    home: './src/Home.jsx'
  },
  output: {
    path: __dirname,
    filename: 'public/js/[name].js',
    publicPath: 'http://localhost:8000/',
  },
  module: {
    loaders: [{
      test: /(\.jsx|\.js)$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
      },
    }, {
      test: /\.(png|jpg|gif|jpeg)$/,
      loader: 'file-loader?name=images/[name].[ext]',
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
