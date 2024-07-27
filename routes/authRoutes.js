const passport = require("passport")


module.exports = (app) => {
    app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] })
    )

    app.get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
        try {
            res.status(200).redirect("/surveys")
        } catch (error) {
            res.status(500).send(`<h1>Something went wron</h1>`)
        }
    })

    app.get("/api/logout", (req, res) => {
        req.logout((err) => {
            if (err) { return next(err.message); }
            res.send("logged out!");
        });
    })

    app.get('/api/current_user', (req, res) => {
        res.json(req.user);
    });
}