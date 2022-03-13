const path =require('path')

const HtmlPlugin =require('html-webpack-plugin')

const htmlPlugin = new HtmlPlugin({
    template:'./src/index.html',
    filename:'./index.html'
})
module.exports={
    mode:'development',
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'main.js'
    },
    plugins:[htmlPlugin],
    devServer:{
        open:true,
        port:8080,
        host:'127.0.0.1'
    }
}