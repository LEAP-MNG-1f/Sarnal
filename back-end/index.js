import express, { request, response } from "express";
import bodyParser from "body-parser";

const app = express();
const port = 9005;

app.use(bodyParser.json());

const users=[
{name: "Sarnai", age:99},
{name: "Bolroo", age:18},
];



app.get("/users", (request,response)=>{
    response.send(users);
    console.log("get shuu za");
});

app.post("/users", (request, response)=>{
    response.send("hello post huselt avlaa");
    console.log("post shuu za");
});

app.put("/users", (request,response)=>{
    response.send("hello put huselt irlee");
    console.log("put shuu za");
});

app.delete("/users", (request,response)=>{
    response.send("hello delete huselt irlee");
    console.log("delete shuu za");
});


app.listen(port ,()=>{
    console.log("server ajillaa sarnai uuu");
    
});

