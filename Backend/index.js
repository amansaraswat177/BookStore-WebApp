import express  from "express";
import  dotenv  from "dotenv";
import mongoose from "mongoose";
import cors from "cors"

import bookRoute from "./route/book.route.js"


dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongo Db
try{
    mongoose.connect(URI,{
    //     useNewUrlParser: true,
    //    useUnifiedTopology: true
    });
    console.log("Connected to mongoDbb")
}catch(error){
console.log("ERROR:",error);
}
//defining routes
app.use("/book",bookRoute)


app.listen(PORT, ()=>{
    console.log(`applisten on ${PORT}` );
});