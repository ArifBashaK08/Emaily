const express = require("express")
const mongoose = require("mongoose")
const passport = require("passport")
const keys = require("./config/keys")
const bodyParser = require("body-parser")
const cors = require("cors")

const authRoutes = require("./routes/authRoutes")
const billingRoutes = require("./routes/billingRoutes")
const cookieSession = require("cookie-session")
require("./models/user")
require("./services/passport")

const app = express()

app.use(bodyParser.json());
app.use(cors());

app.use(
    cookieSession({
      name: 'session',
      maxAge: 15 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
  );

app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(keys.mongoURI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error(err.message))

authRoutes(app)
billingRoutes(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on PORT : ${PORT}`))