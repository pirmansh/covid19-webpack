const HtmlWebpack = require("html-webpack-plugin");
const path = require("path");
 
module.exports = {
   entry: "./src/app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
           {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   }
               ]
           },
         {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                       'file-loader',
                     ],
       },
       ]
   },
   plugins: [
       new HtmlWebpack({
           template: "./src/index.html",
           filename: "index.html"
       })
   ]
}