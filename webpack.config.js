const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js", // bundle.js nomi
    path: path.resolve(__dirname, "dist"), // dist papkasiga
  },
  mode: "development", // Yoki 'production' rejimini ishlatishingiz mumkin

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // @babel/preset-env ni qo'shish
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"], // SASSni qo'llash
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // eski contentBase ni o'rniga static qo'llaniladi
    },
    open: true, // Brauzerni avtomatik ochadi
    port: 9000, // Portni sozlash
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // HTML shabloni
    }),
  ],
};
