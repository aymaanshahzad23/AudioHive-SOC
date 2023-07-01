import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import USER from "./models/user.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

//
async function connectToDb(){
    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser : true,
            useUnifiedTopology: true,
            dbName : process.env.DB_NAME
        });

        console.log(`MongoDB connected at ${db.connection.host}`)

    }
    catch(error){
        console.log(error);
    }
}

connectToDb();

app.get("/test-api", (req, res)=>{
    return res.status(200).send("Hello");
})

app.get("/user", async (req, res)=>{
    try{
        const id = req.query.id;
        let results;
        if (id){
            results = await USER.findById(id);
        } 
        else{
            results = await USER.find();
        }
        return res.status(200).json(results);
    }
    catch(error){
        return res.status(400).send(error);
    }
})

app.post("/user",async (req, res)=>{
    console.log(req.body)
    const newUser = await USER.create(req.body);
    const results = await USER.find();
    return res.status(200).json(newUser);
})

const port = process.env.PORT || 5001;
app.listen(port, ()=>console.log(`runnin at ${port}`));
