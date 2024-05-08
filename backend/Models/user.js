const mongoose =require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    state:{
        type:String,
        default: "active"
    }
    
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel