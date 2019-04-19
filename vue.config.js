const PostCompilePlugin = require('webpack-post-compile-plugin')
const TransformModulesPlugin = require('webpack-transform-modules-plugin')
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
    const conf = config.toConfig()
    config
      .plugin('post-compile')
      .use(PostCompilePlugin, [{
        config: {
          module: {
            rules: [...conf.module.rules]
          }
        }
      }])
      .end()
      .plugin('transform-modules')
      .use(TransformModulesPlugin)
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true
        // 自定义主题场景
        // import: [path.resolve(__dirname, './src/theme')]
      }
    }
  }
}