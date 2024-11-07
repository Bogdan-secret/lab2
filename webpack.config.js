const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ],
                type: 'javascript/auto',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'news.html',
            template: './src/pages/news.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'photo.html',
            template: './src/pages/photo.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'rozklad.html',
            template: './src/pages/rozklad.html'
        })
    ]
};
