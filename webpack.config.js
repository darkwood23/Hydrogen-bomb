const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    moudle: {
        rules: [
            {
                test: /\.css$/i,
                use: ['sytle-loader', 'css-loader']
            },
            {
                test: /\.(png|jpeg|jpg|svg|gif)$/i,
                use: 'asset/resource'
            }
        ]
    }
};