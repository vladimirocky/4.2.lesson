const path = require('path')
const webpack = require('webpack');
const PugPlugin = require ('pug-plugin');


    
    module.exports = {
        entry: {
            index: '.pre_project/4.1.lesson/index.pug',
        },
        // точка выхода - куда скомпилированые файлы складываются
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js',
        },
        plugins: [
            new PugPlugin(),
            
        ],
        module: {
            rules:[
                {
                    test:/\.pug$/,
                    loader: PugPlugin.loader,
                    options:{
                        method:'render',
                    }
                }
            ]
        }
    };
    
    module.exports = {
        module: {
            rules:[
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader",
                    ],
                },
                    {
                    test:/\.css&/i,
                    use: ["style-loader", "css-loader"],
                    },
            ]
        }
    }
    


    