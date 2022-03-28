const mongoose=require("mongoose");

const userSchema={
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
}

userSchema.pre("save",function(next){
    bcrypt.hash(user.password,function(hash) {
        user.password=hash;
    });
})

userSchema.method().checkPassword=function(password,cb){
    
}

const User=mongoose.model("user",userSchema);

module.exports=User;