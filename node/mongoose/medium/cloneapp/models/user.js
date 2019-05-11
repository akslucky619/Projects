var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')

var userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength: 5
    }
},{timestamps: true})

userSchema.pre('save', function (next) {
    var salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt)
    console.log(this)
    next();
})

userSchema.methods.validatePassword = function (password) {
    console.log(this);
    return bcrypt.compareSync(password, this.password);
}

var Users = mongoose.model('Users', userSchema)
module.exports = Users;