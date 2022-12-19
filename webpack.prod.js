const path = require("path");
const common = require('./webpack.common')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtImlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "assets/imgs/[name].[hash][ext]"
    },
    optimization: {
        minimizer:
            [new HtImlWebpackPlugin({
                template: "./src/template.html",
                minify: {
                    removeAttributesQuotes: true,
                    collapsewhitespace: true,
                    removeComments: true
                }
            }),]

    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].bundle.css" }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.name': '"this is the API for development"'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
        ]
    }
})