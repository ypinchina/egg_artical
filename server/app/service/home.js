const sevice = require('egg').Service
class HomeSevice extends sevice {
  async lists() {
      const { app } = this
      try {
        const list = await app.mysql.select('article')
        return list
      } catch(err) {
        console.error(err)
        return null
      }
  }
}
module.exports = HomeSevice