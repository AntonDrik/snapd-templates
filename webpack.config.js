const path = require("path");
const {ProgressPlugin, WatchIgnorePlugin} = require("webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const {TsconfigPathsPlugin} = require('tsconfig-paths-webpack-plugin');
const DeclarationBundlerPlugin = require('./fixed-declaration-bundler-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        CameraServiceCard: './src/CameraServiceCard/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name]/index.js",
        libraryTarget: 'umd',
        library: 'MyLib',
        umdNamedDefine: true
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.resolve(__dirname, './tsconfig.json')
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            // transpileOnly: false
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
        new CleanWebpackPlugin(),
        new ProgressPlugin(),
        // new DeclarationBundlerPlugin({
        //     moduleName:'module',
        //     out:'index.d.ts',
        // })
    ]
};
