const Service = require('egg').Service
class ArticleService extends Service {
    async lists() {
        const { app } = this
        try{
            const result = await app.mysql.select('article')
            if(result) {
                return result
            } else {
                return null
            }
        } catch(err) {
            console.error(err)
            return null
        }
    }
    async upload(params) {
        const { app } = this
        try {
            const result = app.mysql.insert('article', params)
            return result
        } catch(err) {
            console.error(err)
            return null
        }
    }
    async detail(id) {
        const { app } = this
        try {
          const result = app.mysql.get('article', {'id': id})
          return result
        } catch(err) {
            console.err(err)
            return null
        }
    }
}
module.exports = ArticleService