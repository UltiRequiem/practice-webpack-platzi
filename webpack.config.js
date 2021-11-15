const path = require("node:path");
const process = require("node:process");

const dotenv = require("dotenv");

dotenv.config();

const { NODE_ENV, PORT } = process.env;

/** @type {import('webpack').Configuration} */
module.exports = {
  name: "express-server",
  entry: "./src/index.ts",
  target: "node",
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
        test: /\.(js)$/,
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
