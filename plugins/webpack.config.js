const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        home: path.resolve(__dirname, "src", "js", "index.js")
    },
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"), //Carpeta dist se ingresan los compilados.
        filename: "js/bundle-[name].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Expresion Regular
                use: [
                    //"style-loader",
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "Plugins",
            //Podemos entregarle un template para que añada el CSS y el JS a este.
            template: path.resolve(__dirname, "src/index.html")
            /* minify: {
                collapseWhitespace: true //Configuracion para minimizar el html
            } */
        }),
        new MiniCSSExtractPlugin({
            filename: "css/style-[name].css"
        })
    ]
};
