const express = require("express");
const  app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/incrediblestays";

main().then(()=>{
  console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get("/",(req,res)=>{
   res.send("hii hello"); 
});

/* 
  tested with a sample 
  app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
      title: "My New Villa",
      description: "By the beach",
      price: 1200,
      location: "Mysore",
      state: "Karnataka",
    });

    await sampleListing.save();
   console.log("sample was saved");
   res.send("successful testing");
 }); */

app.listen(8080, ()=>{
    console.log("server is listening to port 8080")
});