 import express from "express"
 import cors from "cors"
import { ConnectDb } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRoutes from "./routes/userRoutes.js";
import "dotenv/config"


 const app = express();
 const PORT= 4000;

 //middleware 
 app.use(express.json());
 app.use(cors());
 //connect the db
 ConnectDb();
 app.use("/api/food",foodRouter);
 app.use("/images",express.static("uploads"));
 app.use("/api/user",userRoutes);

 app.get("/",(req,res)=>{
        res.send("server is working")
 })
 app.listen(PORT,()=>{
        console.log(`server is working http://localhost:${PORT} `);
 })
