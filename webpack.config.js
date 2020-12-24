const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    target: 'node',
    entry: './src/index.tsx',
    externals: [nodeExternals()],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    stats: 'errors-only',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false
                    }
                },
                extractComments: false
            })
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    'ts-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [new CleanWebpackPlugin()]
};
