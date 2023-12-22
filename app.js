const express=require("express");
const bodyParser=require("body-parser")

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));

var dayName=["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var names=[];

app.get("/",function(req,res){
var today=new Date();
var option={
    weekday :"long",
    day: "numeric",
    month: "long"
};
var day=today.toLocaleDateString("en-US",option);
res.render("index",{tday:day,tlist:names});
})
app.post("/",function(req,res){
   var name=req.body.todo;
   names.push(name);
   res.redirect("/");
})
app.listen(3000,function(){
    console.log("server is up and running on 3000")
})
