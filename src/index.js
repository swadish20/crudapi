import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { pool } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";



dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

//Middlewares

app.use(express.json());
app.use(cors());

//routes
app.use("/api",userRoutes);




app.use(errorHandling);


createUserTable();






//testing pg connection
app.get("/",async(req,res)=>{
    const result = await pool.query("SELECT current_database()");
    res.send(`The database name is: ${result.rows[0].current_database}`)
})


app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
});