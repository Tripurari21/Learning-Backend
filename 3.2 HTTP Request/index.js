import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res) =>{
    res.send("<h1>hello, Tripurari</h1>")
})

app.get("/about",(req,res) =>{
    res.send("hii Tripurari here working on express js!")
})

app.get("/contact",(req,res) =>{
    res.send("singhtripurari21@gmail.com")
})

app.listen(port, () =>{
    console.log(`server running on port ${port}`);
})