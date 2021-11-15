const path = require("node:path");
const nodeExternals = require("webpack-node-externals");
const process = require("node:process");

require("dotenv").config();

const { NODE_ENV } = process.env;

/** @type {import('webpack').Configuration} */
module.exports = {
  name: "express-server",
  entry: "./src/index.ts",
  target: "node",
  externals: [nodeExternals()],
  mode: NODE_ENV,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
};
