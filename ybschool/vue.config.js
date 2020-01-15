// 别名相关的配置,自己手动建立文件输入
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // "@":'src'  内部已经配置了这个别名
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}