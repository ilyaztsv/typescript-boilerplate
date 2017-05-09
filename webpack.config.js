const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackChunkHash = require('webpack-chunk-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const filename = isProduction ? '[name][hash]' : '[name]';

const config = {
    devtool: isProduction ? 'source-map' : 'eval' ,
    entry: [
        './src/index.ts',
    ],
    output: {
        path: path.resolve('dist'),
        publicPath: isProduction ? './' : 'http://localhost:8080/',
        filename: `${filename}.js`,
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.html'],
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'source-map-loader'
        }, {
            test: /\.ts?$/,
            loader: 'ts-loader'
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: "html-loader?exportAsEs6Default"
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?sourceMap'
            })
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader?sourceMap&importLoaders=1',
                    'resolve-url-loader',
                    'sass-loader?sourceMap'
                ]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin({filename: `${filename}.css`}),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new WebpackChunkHash(),
        new HtmlWebpackPlugin({
            title: 'TypeScript Boilerplate',
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            output: {
                comments: false
            }
        })
    );

    config.plugins.push(
        new OptimizeCssAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        })
    );
}

module.exports = config
