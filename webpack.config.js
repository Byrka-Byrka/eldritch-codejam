const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{ test: /target-file.js$/, use: `val-loader` },{ test: /\.(png|jpe?g|gif)$/i, use: `file-loader` }],
      },
    resolve: {
        extensions: ['.js']
    },
    // devServer: {
    //     open: true,
    //     hot: true,
    //     port: 8080,
    //     contentBase: path.join(__dirname, 'dist')
    // }
}