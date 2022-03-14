const express=require("express");
const mongoose=require("mongoose")

const app=express();
const connectdb=function(){
    mongoose.connect("mongodb://127.0.0.1:27017/Banking-system");
}

const userSchema=mongoose.Schema({
    firstName:{type:string,required:true},
    lastName:{type:string,required:true},
    age:{type:Number,required:true},
    email:{type:string,required:true},
    address:{type:string,required},
    gender:{type:string,default:"female"},
    type:{type:string,default:"customer"},   
},
{
    timestamps:true,
});

const User=mongoose.model("/user",userSchema);

const BranchDetail=mongoose.Schema({
    name:{type:string,required:true},
    address:{type:string,required:true},
    IFSC:{type:string,required:true},
    MICR:{type:Number,required:true},
},
{
    timestamps:true,
});

const Branch=mongoose.model("/branch",BranchDetail);

const MasterAccount=mongoose.Schema({
    balance:{type:Number,required:true},
},
{
    timestamps:true,
});

const Master=mongoose.model("/master",MasterAccount);


const SavingAccount=mongoose.Schema({
    account_number:{type:Number,required:true,unique:true},
    balance:{type:Number,required:true},
    intrestRate:{type:Number,required:true},
},
{
    timestamps:true,
});

const Saving=mongoose.model("/saving",SavingAccount);


const FixedAccount=mongoose.Schema({
    account_number:{type:Number,required:true,unique:true},
    balance:{type:Number,required:true},
    intrestRate:{type:Number,required:true},
    startDate:{type:Number,required:true},
    maturityDate:{type:Number,required:true},
},
{
    timestamps:true,
});

const Fixed=mongoose.model("/fixed",FixedAccount);


app.listen(5000,async function(){

    try{
        await connectdb();
        console.log("listning at port 5000");
    }catch(err){
        console.log(err);
    }

})