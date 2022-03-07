const express=require("express");
const { path } = require("express/lib/application");

const app=express();

app.use(logger);

app.get("/books",function(req,res)
{
    res.send({route:"/books"});
});

app.use(checkpermission);

app.get("/libraries",function(req,res)
{
    res.send({route:"/libraries",permission:true});
});

app.get("/authors",function(req,res)
{
    res.send({route:"authors",permission:true});
});

function logger(req,res,next)
{
    console.log("checking for all the responses")
    next();
}

function checkpermission(req,res,next)
{
    // if(path=="/author")
    // {
    //     res.send("author");
    // }
    // else
    // {
    //     res.send("librarian")
    // }
    console.log("also checking using second middleware")
    next();
}

app.listen(4000,function(req,res)
{
    console.log("listining at port 4000");
});