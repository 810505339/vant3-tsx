module.exports = {

    css: {
        requireModuleExtension: true,
        loaderOptions: {
            css: {
                // 注意：以下配置在 Vue CLI v4 与 v3 之间存在差异。
                // Vue CLI v3 用户可参考 css-loader v1 文档
                // https://github.com/webpack-contrib/css-loader/tree/v1.0.1

                modules: {
                    localIdentName: '[name]-[hash:base64:5]',
                },
                localsConvention: 'camelCaseOnly',
            }
        }
    },
    devServer: {
        open: false, // 编译完成是否打开网页
        host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
        port: 8080, // 访问端口
        https: false, // 编译失败时刷新页面
        hot: true, // 开启热加载
        hotOnly: false,
        proxy: {

            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        },
        overlay: { // 全屏模式下是否显示脚本错误DRFC
            warnings: true,
            errors: true
        },

        before: app => {
        }
    },

}