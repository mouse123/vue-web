const news = require('../models/news.js');

const getNewsList = function* () {
	const id = this.params.id;
	const result = yield news.getNewsById(id);
	this.body = result;
}

module.exports = (router) =>{
	router.get('/news/:id',getNewsList)
}