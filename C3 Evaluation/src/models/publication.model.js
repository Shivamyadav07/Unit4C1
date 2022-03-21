const mongoose=require("mongoose");


const publicationSchema=({
    name:{type:String,required:true},
    book:{type:mongoose.Types.ObjectId,ref:"book",required:true},
},
{
    timestamps:true,
});

const Publication=mongoose.model("publication",publicationSchema);


module.exports=Publication;