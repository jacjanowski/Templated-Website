var express    = require("express"),
bodyParser = require("body-parser");


var searchResults = [];

var PORT = process.env.PORT || 3000;
var app = express();
	
// mongoose.connect("mongodb://localhost/portfolio", {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true
//   })
//   .then(() => console.log('DB connected!'))
//   .catch(err => {
//     console.log(`DB Connection Error: ${err.message}`);
//   });
app.use(bodyParser.urlencoded({extended:true}));



app.set("view engine","ejs");
app.use(express.static(__dirname + '/public/'));

app.get("/", function(req,res){
	res.render("header")
});

app.post("/search",function(req,res){
	var photo_name = req.body.photo_name;
	console.log(req.body.photo_name);
	searchResults.push(photo_name);
	res.redirect("/photos");
	
});

app.get("/photos", function(req,res){
	res.render("show", {photo_name: searchResults});

});





app.listen(PORT,function(){
console.log('server successfully started on port '+PORT);
});