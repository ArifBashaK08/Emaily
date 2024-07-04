const express = require("express")
const app = express()
const dotenv = require("dotenv")

dotenv.config()

app.get("/", (req, res) => {
    res.status(200).send(`<h1>Hello from Express</h1>`)
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server is running`))