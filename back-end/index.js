import express, { request, response } from "express";
import bodyParser from "body-parser";

const app = express();
const port = 9009;

app.use(bodyParser.json());

const users=[
{id:1, name: "Haimish", age:34},
{id:2, name: "Guyug", age:35},
{id:3, name: "Eguunee", age:466},
{id:4, name: "Taishir", age:546},

];


app.get("/users", (request,response)=>{
    response.send(users);
    console.log("4 hereglegch get huselteer avlaa");
});

app.post("/users", (request, response)=>{
    const {name, age }=request.body;
      
    const number = Math.random()*100;
    const result = Math.floor(number);
    const newUser={
        id: result,
        name: name,
        age: age
    }
    console.log(newUser);
    

    users.push(newUser)
    response.send(users)
});

app.put("/users", (request,response)=>{
    const {id, updatedName, updatedAge}=request.body;
    if (!id){
        return response.send("ID baihgui bna");
    }
    if (!updatedName && !updatedAge){
        return response.send("gomen!!!! name, age oruulaagui bna!!!!")
    }
    
    users.find((user)=>{
        if (user.id==id){
            user.name = updatedName ? updatedName : user.name
            user.age = updatedAge ? updatedAge : user.age
            return user;
        } 
    });
    response.send(users);
    console.log("Edit hiigdlee");
});


app.delete("/users", (request,response)=>{
    const {id}=request.body;
    const filteredUser = users.filter((user)=>user.id!==id);
    response.json(filteredUser);
    });


app.listen(port ,()=>{
    console.log("server ajillaa sarnai uuu");
    
});

