
var Mongoose 	= require('mongoose');

Mongoose.connect('mongodb://localhost', { useMongoClient: true });

// Throw an error if the connection fails
Mongoose.connection.on('error', function(err) {
	if(err) throw err;
})
;
Mongoose.Promise = global.Promise;

Mongoose.connect('mongodb+srv://Arsh:1c98nqT4GpnQfote@cluster0.iwdkoqo.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }, (err) => {
      if(err){
          console.log('Error connecting: ', err);
      }else{
          console.log('MongoDB successfully connected');
      }
});
module.exports = { Mongoose, 
	models: {
		user: require('./schemas/user.js'),
		room: require('./schemas/room.js')
	}
};