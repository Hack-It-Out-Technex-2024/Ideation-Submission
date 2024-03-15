import "dotenv/config";
import { app } from "./app.js";
import connectDB from "../db/db.js";
import "../middlewares/middlewares.js";

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(
                `Server is running : http://localhost:${process.env.PORT}`
            );
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    });
