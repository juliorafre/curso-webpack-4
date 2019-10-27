const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
        home: path.resolve(__dirname, "src", "js", "index.js")
    },
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"), //Carpeta dist se ingresan los compilados.
        filename: "js/bundle-[name].js"
    },
    devServer: {
        hot: true, //Hot module Replacement
        open: true,
        port: 9000,
        index: "index.html"
    },
    module: {
        rules: [
            {
                test: /\.js$/, //Expresion Regular
                use: "babel-loader",
                exclude: /node_modelus/ // Excluyemos este directorio ya que no necesitamos que transcriba el Js interno en el.
            },
            {
                test: /\.css$/, //Expresion Regular
                use: [
                    "style-loader",
                    /* {
                        loader: MiniCSSExtractPlugin.loader
                    }, */
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //Hot module Replacement
        new HTMLWebpackPlugin({
            title: "webpacl-dev-server",
            //Podemos entregarle un template para que añada el CSS y el JS a este.
            template: path.resolve(__dirname, "src/index.html")
            /* minify: {
                collapseWhitespace: true //Configuracion para minimizar el html
            } */
        })
        /* new MiniCSSExtractPlugin({
            filename: "css/style-[name].css"
        }) */
    ]
};
