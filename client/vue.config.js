module.exports = {
    devServer: {
        // Paths
        proxy: {
        '/article': {
          target: 'http://localhost:7001', // 接口地址
          changeOrigin: true, // 是否跨域
          ws: true 
        }
      }
    }
}