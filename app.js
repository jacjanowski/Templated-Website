var express    = require("express"),
	bodyParser = require("body-parser"),
	request	   = require("request");



var PORT = process.env.PORT || 3000;
var app = express();

var CLIENT_ID = "&client_id=eldAH6lEOD3YrspfMW8Lo-6lhy5QUB6stBxTP7SJxcg",
	URL       = "https://api.unsplash.com/";
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


app.post("/photos", function(req,res){

	var photo_name = req.body.photo_name;
	var TOKEN = URL + "/search/photos?query=" + photo_name + CLIENT_ID;
	request(TOKEN, function(error, response, body){
		if(!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			
			var PictureObject = [

				{
					username: data.results[0].user.username,
					created_at: data.results[0].created_at,
					image: data.results[0].urls.raw,
					description: data.results[0].alt_description,
					bio: data.results[0].user.bio 
					 
				},
				{
					username: data.results[1].user.username,
					created_at: data.results[1].created_at,
					image: data.results[1].urls.raw,
					description: data.results[1].alt_description,
					bio: data.results[1].user.bio 
					 
				},
				{
					username: data.results[2].user.username,
					created_at: data.results[2].created_at,
					image: data.results[2].urls.raw,
					description: data.results[2].alt_description,
					bio: data.results[2].user.bio 
					 
				}
			];

			res.render("show", {picture: PictureObject});
			
		}
	
	})
	

});


app.get("/photos/random", function(req,res){
	var TOKEN = URL+ "/photos/random?&" + CLIENT_ID;
	request(TOKEN, function(error, response, body){
		if(!error && response.statusCode == 200) {

			var data = JSON.parse(body);
			var PictureObject = [
				
				{
					created_at: data.created_at,
					image: data.urls.raw,
					description: data.alt_description,
					bio: data.user.bio, 
					likes: data.likes
					
				}
			];
			res.render("random", {picture: PictureObject});
		}

	});
});





app.listen(PORT,function(){
console.log('server successfully started on port '+PORT);
});