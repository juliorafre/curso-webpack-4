const path = require("path");

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
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};
 