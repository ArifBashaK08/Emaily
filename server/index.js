const express = require("express")
const mongoose = require("mongoose")
const cookieSession = require("cookie-session")
const passport = require("passport")
const keys = require("./config/keys")

const authRoutes = require("./routes/authRoutes")
require("./models/user")
require("./services/passport")
const dotenv = require("dotenv")

dotenv.config()
const app = express()

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(keys.mongoURI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error(err.message))

authRoutes(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running`))