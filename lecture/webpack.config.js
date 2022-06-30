const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: 'development', //production
    devtool: 'eval', //hidden -source -map
    resolve :{
        extensions: ['.js','.jsx','.tsx','.ts'] // 요 파일들을 검사
    },
    entry:{
        app:'./client' //client 파일을 app.js로 배출 
    },
    //요 모듈 플러그인을 통해 entry
    module:{
        //tsx 파일 만나면 옛날 코드로 변환해라
        rules:[{
            test:/\.tsx?/,
            loader:'ts-loader'
        }]
    },

    output:{
        filename:'[name].js',// app 이름을 정해놨으니
        path: path.join(__dirname,'dist')//dist 폴더에 app.js 배출
    }
}