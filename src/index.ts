import express, { json } from "express";
import "express-async-errors";
import router from "./routes/index";


import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const app = express();
app.use(json());
app.use(router);


const port = Number(process.env.PORT) || 5001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})