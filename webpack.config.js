const path = require('path');
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin()
const CreateFileWebpack = require('create-file-webpack')
const appVersion = gitRevisionPlugin.version() + "/" + gitRevisionPlugin.branch();
console.log("Version: " + appVersion);

module.exports = {
    entry: {
        app: './src/app.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: 'index.html' },
                { from: 'lib', to: 'lib' },
                { from: 'html', to: 'html' },
                { from: 'data', to: 'data' }
            ],
        }),
        new webpack.DefinePlugin({
            BUILD_version: JSON.stringify(appVersion),
            BUILD_buildDate: JSON.stringify((new Date()).toISOString().substr(0, 19)),
        }),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
    ],
    output: {
        filename: 'mtbmaps.[name].min.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
    },
    module: {
     rules: [ {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader',
         ],
       }, {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
             'file-loader',
         ],
     }, {
         test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
         use: [
             {
                 loader: 'file-loader',
                 options: {
                     name: '[name].[ext]',
                     outputPath: 'fonts/'
                 }
             }
         ]
     } ]
    },
};