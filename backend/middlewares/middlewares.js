import express from "express"
import cors from "cors"

import { app } from "../src/app.js";
import router from "../routes/routes.js";

app.use(express.json())
app.use(cors())
app.use(router)