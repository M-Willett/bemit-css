const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: [
      "webpack-hot-middleware/client",
      path.resolve(__dirname, "src/ui/index.js"),
    ],
  },
  // watch: true,
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "docs"),
    publicPath: "/",
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, "docs"),
    hot: true,
  },

  plugins: [
    new CleanWebpackPlugin(["docs"]),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "html-loader?interpolate=require!assets/index.html",
    }),
    // Enable debug mode for supported plugins
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    // Write out CSS bundle to its own file:
    // new ExtractTextPlugin({
    //     filename: '[name].bundle-[hash].css',
    //     allChunks: true,
    //     ignoreOrder: false
    // })
  ],

  module: {
    // noParse: [
    // 	/(node_modules|~)\/(crappy\-bundled\-lib|jquery)\//gi
    // ],
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg|eot|woff|woff2|ttf)$/i,
        use: ["file-loader?name=[name].[ext]"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // {
      //     test:/\.less$/,
      //     use: ExtractTextPlugin.extract({
      //         fallback: 'style-loader',
      //         use: ['css-loader','less-loader'],
      //     })
      // },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "env",
                {
                  targets: {
                    chrome: "67",
                  },
                },
              ],
              "react",
            ],
            plugins: [
              "transform-class-properties",
              "transform-object-rest-spread",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
