const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")
const passport = require("passport")
const keys = require("./config/keys")
const cors = require("cors")

const authRoutes = require("./routes/authRoutes")
require("./models/user")
require("./services/passport")

const app = express()

app.use(cors());

app.use(
    session({
        secret: keys.cookieKey,
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
    })
)

app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(keys.mongoURI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error(err.message))

authRoutes(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on PORT : ${PORT}`))