const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './js/index.js',
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    devServer: {
        compress: true,
        contentBase: path.resolve(__dirname, '../dist'),
        historyApiFallback: true,
        hot: true,
        open: true,
        port: 3000,
        clientLogLevel: 'silent'
    },
    watch: true,
    output: {
        filename: '[name].[contenthash].js', // динамичное и уникальное имя файла
        path: path.resolve(__dirname, 'dist'),
        clean: true, // для очистки папки dist при новом билде
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.pug'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        
        new MiniCssExtractPlugin({
            filename: './styles/[name].[contenthash].css',
            chunkFilename: '[id].css'
        }),
    ],
    module: {
        rules: [
            {
                //pug
                test: /\.pug$/,
                loader: 'pug-loader'
                //npm i -D pug
                //npm i -D pug-loader
                //npm i -D pug-loader —force
            },

            /** Babel **/
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
                // npm install babel-loader @babel/core @babel/preset-env -D
            },
            /** CSS */
            // {
                // test: /\.css$/i,
                // use: ['style-loader', 'css-loader'],
                // npm i style-loader css-loader -D
            // },
            /** SCSS/SAAS */
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'sass-loader'
                    // Creates `style` nodes from JS strings
                    // "style-loader",
                    // Translates CSS into CommonJS
                    // "css-loader",
                    // Compiles Sass to CSS
                    // "sass-loader",
                ],
                // npm i style-loader css-loader sass sass-loader -D
            },
            
            
            /** Картинки */
             /*
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource',
            },*/

            {//npm install --save-dev file-loader 
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',}
          },
            /** Шрифты */
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            /** Файлы CSV */
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
                // npm i csv-loader -D
            },
            /** Файлы XML */
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
                // npm i xml-loader -D 
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single'
    },
    performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
    }
};