var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var userSchema   = new Schema({
    name: String,
    password: String,
    email:String,
    username:String
});

module.exports = mongoose.model('Users', userSchema);
