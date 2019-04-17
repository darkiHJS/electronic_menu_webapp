const path = require('path')

const resolve = dir => {
	return path.join(__dirname, dir)
}

module.exports = {
	chainWebpack: config => {
		config.resolve.alias
		.set('@', resolve('src'))
		.set('_com', resolve('src/components'))
		.set('_page', resolve('src/pages'))
		.set('_styl', resolve('src/assets/styles'))
		.set('_img', resolve('src/assets/img'))
		.set('_http', resolve('src/request'))
	}
}