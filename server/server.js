var express	= require('express'),
    restful	= require('node-restful'),
    mongoose	= restful.mongoose;

var app	=	express();
app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

mongoose.connect('mongodb://localhost/restful');
var BasicInfo = mongoose.Schema({
	FirstName: String,
   	LastName: String,
	Gender: String,
	PhoneNo: Number
});

var Profiles = restful.model('profiles',BasicInfo);
Profiles.methos(['get','put','post','delete'])
Profiles.register(app,'/api/profiles');
app.listen(3000);
console.log('Server running port at 3000');
