var webpack = require('webpack');

module.exports = {
	devtool: 'eval-source-map',
	entry: ['webpack/hot/dev-server', __dirname + "/app/main.js"], //唯一入口文件
	output: {//输出目录
		path: __dirname + "/build", //打包后的js文件存放的地方
		filename: "bundle.js" //打包后的js文件名
	},
	
	module: {
		loaders: [
		  {
		    test: /\.(js|jsx)$/,
		    exclude: /node_modules/,
		    loader: 'babel-loader'
		  },
		  {
        test: /\.html$/,
        loader: 'html'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null'
      },
      {
        test: /\.css$/,
        loader: 'null'
      },
      {
        test: /\.css$/,
        loader: 'raw'
      }
		]
	},
	
	plugins: [
	 new webpack.HotModuleReplacementPlugin() //热模块替换插件
	],
	
	devServer: {
	  contentBase: './build',
//	  colors: true,webpack2.x没有
	  historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    inline: true,//设置为true，当源文件改变时会自动刷新页面
    port: 8080,//设置默认监听端口，如果省略，默认为"8080"
//  process: true,//显示合并代码进度webpack2.x没有
    proxy: {
             '/workspace/*': {
                target: 'http://10.251.251.64:8080',
                secure: false
            }
        }
	}
}
