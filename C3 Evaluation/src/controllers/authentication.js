const { modelName } = require("../models/user.model");
const User=require("../models/user.model")

const register=async(req,res)=>{
    try{
        let user=await User.findOne({email:req.body.email})

        if(!user)
        {
            res.status(400).send("email not found");
        }
        user=User.create(req.body)
        res.status(200).send(user);
    }catch(err){
        console.log(err)
        res.send({message:err.message});
    }
}


module.exports=register;
