const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const glob = require('glob');
const extractSass = new ExtractTextPlugin({
        filename: "[name].css",
//        disable: process.env.NODE_ENV === "development"
});

module.exports = {
    mode: 'development',
    entry: {
        mtbx: './views/js/mtbx.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [
                { loader: "css-loader" }, 
                { 
                    loader: "sass-loader",
                    options: {
                        includePaths: glob.sync('node_modules').map((d) => path.join(__dirname, d))
                    }
                }
                ], 
                fallback: "style-loader" 
            })
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        extractSass,
    ]
};
