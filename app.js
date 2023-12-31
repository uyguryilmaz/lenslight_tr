import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";


dotenv.config();

console.log(process.env.DB_URI);
//connection to the DB




conn();


const app = express();
const port = process.env.PORT;

app.set("view engine","ejs")  

app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.render('index')
})

app.get("/about",(req,res)=>{
    res.render('about')
})

app.listen(port, () => {
    console.log(`Application running on port: ${port}`)
});


