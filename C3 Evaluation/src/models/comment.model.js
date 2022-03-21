const mongoose=require("mongoose");

const commentSchema=({
    body:{type:String,required:true},
    user_id:{type:mongoose.Types.ObjectId,ref:"user",required:true},
    book_id:{type:mongoose.Types.ObjectId,ref:"book",required:true},

},
{
    timestamps:true,
});


const Comment=mongoose.model("comment",commentSchema);

module.exports=Comment;