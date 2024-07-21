const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const keys = require("../config/keys")
const { model } = require("mongoose")

const User = model("users")

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id)

        if (!user) return console.error("User not found!")

        done(null, user)
    } catch (error) {
        console.error(error.message)
        done(error, null);
    }
})

//Below config is known as "google" identifier
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback",
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {

    const existingUser = await User.findOne({ googleId: profile.id })

    if (!existingUser) {
        const user = await User({ googleId: profile.id }).save()
        console.log(user);
        return done(null, user)
    }
    
    console.log(existingUser);
    return done(null, existingUser)
})
)

