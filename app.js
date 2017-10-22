var express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:true}));
var list = [
 		"jack",
 		"mahakaal",
 		"darinda"
	];
app.get("/",function(req,res){
	
	res.render("friends.ejs");
});
app.post("/addfriend",function(req,res){
	var name = req.body.name;
	list.push(name);
	res.redirect("/friends");
});
app.get("/friends",function(req,res){
	res.render("form.ejs",{list:list});
});


app.listen(3000,function(){
	console.log("server running!!!!");
});
