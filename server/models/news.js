const db = require('../config/db.js'),
	  newsModel = '../schema/news.js';//引入表结构
const CompanyDb = db.Company;//数据库

const News = CompanyDb.import(newsModel);// 用sequelize的import方法引入表结构，实例化了News

const getNewsById = function* (id){
	const newsInfo = yield News.findAll({
		where: {
			news_id: id
		},
		// attributes: ['news_id','content','status','title','time']
	});
	return newsInfo
}

module.exports = {
  getNewsById  // 导出getNewsById的方法，将会在controller里调用
}
