import express from "express"
import 'dotenv/config'

const app = express()


//Home 
app.get("/", (req, res) => {
    res.status(200).json({
        message: "OK"
    })
})
app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port ${process.env.PORT} `)
})