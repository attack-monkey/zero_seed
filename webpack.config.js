const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [ 
        new CleanWebpackPlugin(['dist']),
        // Home page
        new HtmlWebpackPlugin({
            filename: `index.html`,
            template: 'src/assets/pages/index.html',
            inject: 'body'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // Specify the common bundle's name.
        }),
    ],
    resolve: {
      modules: [
        path.resolve('./src'),
        path.resolve('./node_modules')
      ]
    },
    devtool: 'inline-source-map',
    devServer: { contentBase: './dist' },
    module: {
        rules: [
            {
            test: /\.(scss)$/,
            use: [{
                loader: 'style-loader', // inject CSS to page
            }, {
                loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
                loader: 'postcss-loader', // Run post css actions
                options: {
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                    return [
                    require('precss'),
                    require('autoprefixer')
                    ];
                }
                }
            }, {
                loader: 'sass-loader' // compiles SASS to CSS
            }]
            }
        ]
    }
};