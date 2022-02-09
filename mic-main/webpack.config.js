// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: './src/index.ts',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,

        headers: {
            'Access-Control-Allow-Origin': '*',
        },

        host: 'localhost',
        // historyApiFallback: true, // 解决二级页面刷新404
        // proxy: { // 解决二级页面刷新时候找不到资源问题
        //     "/vite": {
        //         target: "http://localhost:8080",
        //         pathRewrite: { "^/vite": "/" }
        //     },
        //     "/vue-platform": {
        //         target: "http://localhost:8080",
        //         pathRewrite: { "^/vue-platform": "/" }
        //     }
        // }



    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';


    } else {
        config.mode = 'development';
    }
    return config;
};
