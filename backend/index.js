import express from "express"
import cors from "cors"
// import mongoose, { connection } from "mongoose"
// import USER from "./models/user.js"
import dotenv from "dotenv"
dotenv.config()
import { createServer } from "http";
import { Server } from "socket.io";

const app = express()
app.use(express.json())
app.use(cors()) 

const server = createServer();
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.get("/", (req, res)=>{
    return res.status(200).send("Hello");
})

io.on('connection', (socket)=>{
    socket.emit('me', socket.id);
    socket.on('disconnect', ()=>{
        socket.broadcast.emit("callended");
    });

    socket.on("calluser", ({userToCall, signalData, from, names}) => {
        io.to(userToCall).emit("calluser", {signal:signalData, from, names})           
    });

    socket.on("answercall", (data)=>{
        io.to(data.to).emit("callaccepted", data.signal)
    })

})
 
const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`runnin at ${port}`));