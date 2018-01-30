const webpack = require('webpack');
const poststylus = require('poststylus');
const autoprefixer = require('autoprefixer');
const path = require('path');
//配置根路径别名就很方便的使用绝对路径了

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports.rootPath = resolve('src');

module.exports.stylusLoaderOptionsPlugin = new webpack.LoaderOptionsPlugin({
    options: {
        stylus: {
            use: [
                poststylus([
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                        browsers: [
                            '>1%',
                            'last 4 versions',
                            'Firefox ESR',
                            'not ie < 9', // React doesn't support IE8 anyway
                        ],
                        flexbox: 'no-2009',
                    })
                ])
            ]
        }
    }
});