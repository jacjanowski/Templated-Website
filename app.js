var express    = require("express"),
	bodyParser = require("body-parser"),
	request	   = require("request");


var searchResults = [];
var TOKEN = "https://api.unsplash.com/search/photos?page=1&query=office&client_id=eldAH6lEOD3YrspfMW8Lo-6lhy5QUB6stBxTP7SJxcg";
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
	var photo_name = req.body.photo_name;

	console.log(req.body.photo_name);
	searchResults.push(photo_name);
	res.render("show", {photo_name: photo_name})
	
});

app.get("/photos", function(req,res){
	var photo_name = req.body.photo_name;
	request(TOKEN, function(error, response, body){
		if(!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			console.log(data.urls.raw);

		}
	
	})
	res.render("show", {photo_name: searchResults});

});





app.listen(PORT,function(){
console.log('server successfully started on port '+PORT);
});