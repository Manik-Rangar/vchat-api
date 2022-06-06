const express= require("express");
const http=require("http");
const app=express();
const port=process.env.PORT || 80;

// Middleware to encode url
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userlist=new Map();
const server = http.createServer(app);

// This is the home page for the api which as a single route / 
app.get("/",(req,res)=>{
    res.send("this is usrs api for vchat app");
});


// Each time the request  returns a object which is the current users currently present in the chat 


// URL for adding a user
// http://localhost/adduser?id=128&name=kiran
// add user to the map and returns the updated value of users as json
app.get('/adduser',(req,res)=>{
    let id=req.query.id;
    let name=req.query.name;
    userlist.set(id,name);
    //console.log(req.query);
    //console.log("userlist=",userlist)
    
    res.json(Object.fromEntries(userlist));
});


// URL for deleting a user 
// http://localhost/deleteuser?id=124
app.get('/deleteuser',(req,res)=>{
    let id=req.query.id;
    //console.log("before deletion",userlist,id);
    userlist.delete(id);
    // console.log("after deletion",userlist);
    
    //console.log("now the users are ",userlist);
    res.json(Object.fromEntries(userlist));
});


// Now to run a json for users in chat app use this 

// var person={
//     first_name:"johnny",
//      last_name: "johnson",
//    phone:"703-3424-1111"
// };
// for (var property in person) {
//      console.log(property,":",person[property]);
// }



server.listen(port,()=>{
   // console.log("connected to the server successfully");

})
