var path = require("path");

module.exports = {
  entry: [
    `${__dirname}/src/index.js`,
    `${__dirname}/src/scss/app.scss`
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/dist"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      },
    },{
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ["style-loader", "css-loader", "sass-loader"]
    }]
  }
};