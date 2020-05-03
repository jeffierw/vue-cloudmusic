module.exports = {
    configureWebpack: {
        resolve: {
            alias: { // 设置别名
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'views': '@/views',
                'network': '@/network'
            }
        }
    }
}