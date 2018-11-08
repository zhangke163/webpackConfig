const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //入口
    entry:{
        //可以有多个入口，也可以有一个，如果有一个，默认从这一个开始分析
        'main':'./src/main.js'
    },
    output:{
        //出口
        filename:'./build.js'
    },
    //生命模块，包含着各种loaders
    module:{
        loaders:[//webpack后面版本可以叫做rules
            {test:/\.css$/,loader:'style-loader!css-loader'},
            {test:/\.(jpg||png||jpeg||svg)$/,loader:'url-loader?limit=4'}, //如果limit参数小于图片大小，则生成图片。如果大于图片大小就生成base64编码
            //建议比较小的图片生成base64编码
            {test:/\.scss$/,loader:'style-loader!css-loader!sass-loader'}
        ]   
    },
    watch:true,//监视文件发生改动，自动产出build.js
    plugins:[
        //插件的执行顺序与元素的索引有关
        new HtmlWebpackPlugin({
            template:'./src/index.html', //参照物
        })
    ]
}