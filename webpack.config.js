var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './app/vue-main.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './public/javascripts'),
        publicPath: '/javascripts/',
        filename: 'vue.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            // If using the runtime only build
            // vue$: 'vue/dist/vue.runtime.esm.js' ,// 'vue/dist/vue.runtime.common.js' for webpack 1
            // Or if using full build of Vue (runtime + compiler)
            // vue$: 'vue/dist/vue.esm.js'      // 'vue/dist/vue.common.js' for webpack 1
            vue: 'vue/dist/vue.js'
            // vue: process.env.NODE_ENV == 'production' ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    performance: {
        hints: 'warning',
        maxEntrypointSize: 612000,
        maxAssetSize: 612000
    }
};