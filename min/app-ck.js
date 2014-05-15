var express=require("express"),path=require("path"),favicon=require("static-favicon"),logger=require("morgan"),cookieParser=require("cookie-parser"),bodyParser=require("body-parser"),routes=require("./routes/index"),week=require("./routes/thisWeek"),comic=require("./routes/comic"),app=express();app.set("views",path.join(__dirname,"views")),app.set("view engine","jade"),app.use(favicon()),app.use(logger("dev")),app.use(bodyParser.json()),app.use(bodyParser.urlencoded()),app.use(cookieParser()),app.use(express.static(path.join(__dirname,"public"))),app.use("/",routes),app.use("/week",week),app.get("/comic/:comic",comic.comic),app.use(function(e,r,s){var a=new Error("Not Found");a.status=404,s(a)}),"development"===app.get("env")&&app.use(function(e,r,s,a){s.status(e.status||500),s.render("error",{message:e.message,error:e})}),app.use(function(e,r,s,a){s.status(e.status||500),s.render("error",{message:e.message,error:{}})});var server=app.listen(3e3,function(){console.log("Listening on port %d",server.address().port)});module.exports=app;