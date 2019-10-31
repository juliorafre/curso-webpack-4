const path = require("path");
const MiniCssExtratPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
        home: path.resolve(__dirname, "src", "js", "index.js"),
        contact: path.resolve(__dirname, "src", "js", "contact.js")
    },
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"), //Carpeta dist se ingresan los compilados.
        filename: "js/bundle-[name].js",
        publicPath: "dist/",
        chunkFilename: "js/[id].[chunkhash].js"
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
                    {
                        loader: MiniCssExtratPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    "postcss-loader"
                ]
            },
            {
                //LESS
                test: /\.less$/, //Expresion Regular
                use: [
                    {
                        loader: MiniCssExtratPlugin.loader
                    },
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                //SASS
                test: /\.scss$/, //Expresion Regular
                use: [
                    {
                        loader: MiniCssExtratPlugin.loader
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                //Stylus
                test: /\.styl$/, //Expresion Regular
                use: [
                    {
                        loader: MiniCssExtratPlugin.loader
                    },
                    "css-loader",
                    "stylus-loader"
                ]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 900000
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtratPlugin({
            filename: "css/[name].css",
            chunckFileName: "css/[id].css"
        }),
        new webpack.HotModuleReplacementPlugin(), //Hot module Replacement
        new HTMLWebpackPlugin({
            title: "webpacl-dev-server",
            template: path.resolve(__dirname, "src/index.html")
        }),
        new webpack.DllReferencePlugin({
            manifest: require("./modules-manifest.json")
        })
    ]
};
