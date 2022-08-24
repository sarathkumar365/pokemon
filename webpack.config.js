const path = require('path');
const  HTNLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    devtool:'source-map',
    devServer: {
        // static: {
        //   directory: path.resolve(__dirname, 'src/dist'),
        // },
        port: 3000,
        open: {
          app: {
            name: 'google-chrome',
          },
        },
        hot: true,
        compress: true,
        historyApiFallback: true,
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ]
            }
        ]
    },
    plugins: [
        new HTNLWebpackPlugin({
            template:'./src/index.html'
        })
    ],
};