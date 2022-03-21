const mongoose=require("mongoose");
var validator = require('validator');


const userSchema=({
    firstName:{type:String,isLength:{min:3,max:30},required:true},
    lastName:{type:String,isLength:{min:3,max:30},required:false},
    age:{type:Number,required:true,isInt:({ min:1, max:130 })},
    email:{type:String,required:true,unique:true},
    profileImages:{required:true},

},
{
    timestamp:true,
})

const User=mongoose.model("user",userSchema);

module.exports=User;