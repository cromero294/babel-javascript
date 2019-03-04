const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'app.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
                // loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
}