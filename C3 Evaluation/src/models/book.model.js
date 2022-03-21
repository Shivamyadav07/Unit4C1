const mongoose=require("mongoose");
var validator = require('validator');

const bookSchema=({
    likes:{type:Number,default:0,required:true},
    coverImage:{type:String,required:true,},
    content:{type:String,required:true},
    auther:{type:mongoose.Types.ObjectId,ref:"user",required:true},
},
{
    timestamp:true,
});

const Book=mongoose.model("book",bookSchema);

module.exports=Book;