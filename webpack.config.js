var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var BUILD_DIR = path.resolve(__dirname, 'dist');

var HtmlWebpackPlugin = require('html-webpack-plugin');

 

var config = {
  entry: {
    app: APP_DIR + '/index.js' 
  }, 
   
//   output: {
//     path: BUILD_DIR,
//     filename: 'bundle.js'
//   },
 

  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loaders: ["babel-loader"]
      },
 
    ]
  },

  plugins: [
   
    //create vendor plugin
    //anything imported from node_modules
    //shall be bundled here
    new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js',
            minChunks:  function(module, count) {
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
        }),

    
    new HtmlWebpackPlugin({
      title: 'My Product App',
      filename: 'index.html', //output file name
      template: APP_DIR + '/index.html' //input file
  })],

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      APP_DIR,
      'node_modules'
    ]
  },

  //FIXME: History API not working
  devServer: {
    // historyApiFallback: {
    //     index: '/index.html'
    //   }
  }

};

module.exports = config;


