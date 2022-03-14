const path =require('path')

const HtmlPlugin =require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlPlugin = new HtmlPlugin({
    template:'./src/index.html',
    filename:'./index.html'
})
module.exports={
    devtool:'eval-source-map',
    mode:'development',
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'js/main.js'
    },
    plugins:[htmlPlugin,new CleanWebpackPlugin()],
    devServer:{
        open:true,
        port:8083,
        host:'127.0.0.1'
    },
    module:{
        rules:[
            {
            test:/\.css$/,use:['style-loader','css-loader']
        },
        {test:/\.jpg|png|gif$/,use:'url-loader?limit=22229&outputPath=images'},
        {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
    ]
    }
}