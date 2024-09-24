const passport = require("passport")
 
module.exports = (app) => {
    app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] })
    )

    app.get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
        try {
            return res.status(200).redirect("http://localhost:5173/surveys")
        } catch (error) {
            return res.status(500).send(`<h1>Something went wrong</h1>`)
        }
    })

    app.get("/api/logout", (req, res) => {
        req.logout()
        res.status(200).redirect("/");
    })

    app.get('/api/current_user', (req, res) => {
        res.json(req.user);
    });
}