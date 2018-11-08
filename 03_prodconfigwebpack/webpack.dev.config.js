module.exports = {
    //入口
    entry:{
        //可以有多个入口，也可以有一个，如果有一个，默认从这一个开始分析
        'main':'./main.js'
    },
    output:{
        //出口
        filename:'./build.js'
    },
    watch:true,//监视文件发生改动，自动产出build.js
}