var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var BUILD_DIR = path.resolve(__dirname, 'dist');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');


var config = {
  entry: {
    app: APP_DIR + '/index.js' ,
  }, 
   
  output: {
    path: BUILD_DIR,
    filename: 'bundle.[chunkhash].js'
  },
 

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
   
    new CopyWebpackPlugin([
      {
        from: "assets",
        to: "assets"
      }
    ]),
    //create vendor plugin
    //anything imported from node_modules
    //shall be bundled here
    new webpack.optimize.CommonsChunkPlugin({
         // chunks: ["react", "redux"],  
          name: 'vendor',
            filename: 'vendor.bundle.js',
            minChunks:  function(module, count) {
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
        }),
 
    new webpack.optimize.OccurrenceOrderPlugin(true),

     new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
          warnings: false,
        },
      }),


    // A plugin for a more aggressive chunk merging strategy



    new webpack.optimize.AggressiveMergingPlugin(),


  //   //Bug with this plugsins 
  // //  https://github.com/webpack/webpack/issues/4065
  //   new webpack.optimize.AggressiveSplittingPlugin({
       
  //     minSize: 30000, //Byte, split point. Default: 30720
  //     maxSize: 50000, //Byte, maxsize of per file. Default: 51200
  //     chunkOverhead: 0, //Default: 0
  //     entryChunkMultiplicator: 1, //Default: 1
  //   }),

    
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


