const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        //publicPath: "dist/",
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "img/[name].[hash:8].[ext]",
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015"],
                    },
                },
            },
            { test: /\.vue$/, use: ["vue-loader"] },
        ],
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
        },
    },
    plugins: [new HtmlWebpackPlugin({ template: "index.html" })],
    devServer: {
        contentBase: "/dist",
        inline: true,
    },
};
