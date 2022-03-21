const express=require("express");
const Book=require("../models/book.model");

const router=express.Router;

router.post("",async(req,res)=>{
    try{
            const book=await Book.create(req.body);
            res.send(book);

    }catch(err){
        console.log(err);
        res.send(err)
    }
})

module.exports=router;