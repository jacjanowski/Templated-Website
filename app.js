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




app.post("/photos",function(req,res){
	var photoThatIChose = req.body.photo_name;
	console.log(req.body.photo_name);
	res.render("header", {photo_name: photoThatIChose});
	//res.render("contact",{photo_name: photoThatIChose});
});

// app.get("/contact/:photo_name" , function(req,res){
// 	var photo_name = req.body.photo_name;
// 	res.render("header", {photo_name: photo_name});
// });



app.listen(PORT,function(){
console.log('server successfully started on port '+PORT);
});