const express=require("express");
const register = require("./controllers/authentication");
const bookcontroller=require("./controllers/book.controller")

const app=express();

module.exports=app;

app.use(express.json());
app.use("/book",bookcontroller);


app.post("/register",register)