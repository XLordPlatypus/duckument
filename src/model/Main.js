import express from 'express';
import mongoose from "mongoose";
import router from "../controller/Routes.js"

const app = express();
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, async () => {
    await mongoose.connect('mongodb://localhost:27017/duckument-db')
        .then(() => { console.log("Connected to DB") })
        .catch(() => { console.log("Connection failed") })
    console.log(`Server started on port ${port} :)`);
})