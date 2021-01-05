var express    = require("express"),
	bodyParser = require("body-parser");


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



// app.get("/contact", function(req,res) {
// 	res.render("contact");
// });

app.post("/add_photo",function(req,res){
	console.log(req.body);
	res.render("contact");
});


app.listen(PORT,function(){
console.log('server successfully started on port '+PORT);
});