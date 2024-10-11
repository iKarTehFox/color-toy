// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
    entry: {
        main: './src/index.ts',
        styles: './src/css/styles.ts',
        resources: './src/resources/resources.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css', // This pattern names the output CSS files
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ],
    devServer: {
        open: false,
        host: 'localhost',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader'], // Processes CSS files
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'resources/[name][ext][query]' // Processes image files
                }
            }
        ],
    },
    resolve: {
        extensions: ['.ts','.js'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        config.plugins.push(new MiniCssExtractPlugin());
    } else {
        config.mode = 'development';
    }
    return config;
};
