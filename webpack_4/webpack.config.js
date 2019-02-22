const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "production",
    devtool: "eval-source-map",
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public',
        port: 3000,
        inline: true,
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /(\.js|\.jsx)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }, {
            test: /(\.css)$/,
            use: [
                {
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        localIdentName: "[name]_[local]--[hash:base64:5]"
                    }
                }, {
                    loader: "postcss-loader"
                }
            ]
        }]
    },
    plugins: [
        new webpack.BannerPlugin(`837195936@qq.com ${new Date()}`),
        new htmlWebpackPlugin({
            template: __dirname + "/app/index.tpl.html"
        })
    ]
}