var express = require('express')
var app = express()
var fs = require('fs')
var hbs = require('express-handlebars')

app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: false,
}))

app.use("/public", express.static("public"))

app.get("/main", function(req, res){
    fs.readFile("main.html", function(err, data){
        res.send(data.toString())
    })
})

app.get("/profile", function(req, res){
    fs.readFile("profile.html", function(err, data){
        res.send(data.toString().replace("*", "ㅇㅣㄴㄱㅕㅇ"))
    })
})

// 빵꾸
app.get("/user", function(req, res){
    res.render("user", { 
        name : "인경" 
    })

    /* 
        fs.readFile 파일읽어서
        data.toString() 문자로 바꾸고
        replace 문자열을 치환해서
        res.send() 로 브라우져로 보냄
    */

    //fs.readFile("profile.html", function(err, data){
    //    res.send(data.toString().replace("*", "ㅇㅣㄴㄱㅕㅇ"))
    //})
})

//반복 each
app.get("/userlist", function(req, res){
    res.render("userlist", {
        viplist : ["기현", "인경", "누구", "지형", "길동", "영윤"]
    })
})

//조건 if
app.get("/member", function(req, res){
    res.render("member", {
        isMember : true,
    })
})

app.listen(80, function(){
    console.log("포트여림")
})