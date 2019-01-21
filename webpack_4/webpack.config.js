const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    // 输入
    entry: './src/index.js',
    // 输出
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // loader
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: 'babel-loader'
            },

            {
                test: /\.css$/,
                include: [
                  path.resolve(__dirname, 'src'),
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
              }
        ]
    },
    // 代码模块路径解析的配置
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ],
        extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"]
    },

    // 插件
    plugins: [
        new UglifyPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html', // 配置输出文件名和路径
            template: 'assets/index.html', // 配置文件模板
          }),
          new ExtractTextPlugin('index.css')
    ]
}