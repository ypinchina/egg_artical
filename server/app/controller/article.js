const Controllor = require('egg').Controller
class ArticleController extends Controllor {
    async upload() {
        const { ctx } = this
        const result = await ctx.service.article.upload(ctx.request.body)
        if (result) {
            ctx.body = {
                status: 200,
                data: result
            }
        } else {
            ctx.body = {
                status: 500,
                message: '发布文章失败'
            }
        }
    }
    async detail() {
        const { ctx } = this
        const result = await ctx.service.article.detail(ctx.query.id)
        if (result) {
            ctx.body = {
                status: 200,
                data: result
            }
        } else {
            ctx.body = {
                status: 500,
                message: '查询失败'
            }
        }
    }
    async lists() {
        const { ctx } = this
        const result = await this.service.article.lists()
        if (result) {
            ctx.body = {
                status: 200,
                data: result
            }
        } else {
            ctx.body = {
                status: 500,
                message: '查询失败'
            }
        }
    }
}
module.exports = ArticleController