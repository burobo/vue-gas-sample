const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

module.exports = {
    publicPath: './',

    css: {
        extract: false,
    },

    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 10240 }))

        config
            .plugin('html')
            .tap(args => {
                args[0].filename = './index.html'
                args[0].template = './public/index.html'
                args[0].inlineSource = '.(js|css)$'
                args[0].minify = {
                    removeComments: false,
                    collapseWhitespace: false,
                    removeAttributeQuotes: false,
                    collapseBooleanAttributes: false,
                    removeScriptTypeAttributes: false
                }
                return args
            })

        config.optimization.minimize(false)
        config.optimization.splitChunks(false)
    },

    configureWebpack: {
        plugins: [
            new HtmlWebpackInlineSourcePlugin(),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, './gas'),
                        globOptions: {
                            ignore: ['.*']
                        }
                    }
                ],
            }),
        ]
    },
};
