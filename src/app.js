import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


// FORM DATA
app.use(express.json({ limit: "16kb" }))
// URL DATA
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
// PUBLIC ASSETS FOLDER FOR STORING MEDIA OR FILES 
app.use(express.static("public"))
// TO ACCESS COOKIES STORED ON USER DEVICE (CRUD OPERATION)
app.use(cookieParser())

export { app }