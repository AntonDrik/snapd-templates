const path = require("path");
const {ProgressPlugin, WatchIgnorePlugin} = require("webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        CameraServiceCard: './src/CameraServiceCard/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name]/index.js",
        // libraryTarget: 'amd',
        // library: 'SnapdTemplates',
        // umdNamedDefine: true
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
        new CleanWebpackPlugin(),
        new ProgressPlugin()
    ]
};
