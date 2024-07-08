const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const keys = require("../config/keys")
const { model } = require("mongoose")

const User = model("users")

passport.serializeUser((user, done) => {
    console.log(user)
    done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id)

        if (!user) return console.error("User not found!")

        done(null, user)
    } catch (error) {
        console.error(error.message)
    }
})

//Below config is known as "google" identifier
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    const user = await User.findOne({ googleId: profile.id })

    if (!user) {
        try {
            const newUser = await new User({ googleId: profile.id }).save()
            done(null, newUser)
        } catch (error) {
            console.error(error.message)
        }
    }

    console.log("User already exists!")
    done(null, user)
}))

