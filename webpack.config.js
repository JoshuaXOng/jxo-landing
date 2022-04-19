const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV;

module.exports = {
  mode: "production",
  entry: {
    index: "./src/pages/index.tsx"
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      { 
        test: /\.(js)$/, 
        use: "babel-loader" 
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"] 
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ],
  },
  devServer: {
    index: "index.html",
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/pages/index.html",
      chunks: ["index"]
    })
  ]
}
