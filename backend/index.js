const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
// 
const bookRoute = require("./route/book.route.js");
const userRoute = require("./route/user.route.js");
const app = express();
app.use(cors());

app.use(express.json());
dotenv.config();
const port = process.env.PORT || 4000;

const URI = process.env.MongoDBURI;

//connect to mongo
try{
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Connected to mongoDB")
}catch(error){
    console.log("Error: ", error)
}
//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);


app.listen(port,()=>{
    console.log(`Example app is listening on ${port}`);
});