const path = require('path');
module.exports = {
    // define entry file and output
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve('./web/res'),
        filename: '[name].bundle.js'
    },
    // define babel loader
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/ 
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
            },
            {
                test: /fonts\/.*\.(eot|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename:'fonts/[hash][ext][query]',
                },
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]
                
            }
            
        ]
    }
};