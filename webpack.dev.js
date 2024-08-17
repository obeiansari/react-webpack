import merge from 'webpack-merge'
import commonConfig from './webpack.common'

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: process.env.PORT || 8080, 
        host: '0.0.0.0',
        historyApiFallback: true,
        compress: true,
        hot: true,
        proxy: {
            path: '/api/*',
            target: 'http://localhost:9090'
        }
    },
    plugins: [
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
            fix: true,
            emitError: true,
            failOnError: true
        })
    ]
}

module.exports = merge(commonConfig, devConfig)