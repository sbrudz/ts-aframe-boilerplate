const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            path: path.resolve(__dirname, "dist"),
            filename: 'index.html',
            inject: 'head'
        })
    ],
    externals : {
        aframe : {
            commonjs: "aframe",
            amd: "aframe",
            root: "AFRAME" // global variable
        }
    }
};
