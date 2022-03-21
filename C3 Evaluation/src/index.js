const express=require("express");
const register = require("./controllers/authentication");

const app=express();

module.exports=app;

app.use(express.json());


app.post("/register",register)