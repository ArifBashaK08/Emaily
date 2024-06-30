const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.status(200).send(`<h1>Hello from Express</h1>`)
})

const PORT = process.env.PORT
app.listen(PORT)