const keys = require("../config/keys")
const stripe = require("stripe")(keys.stripeSecretKey)

module.exports = app => {
    app.post('/api/stripe',  (req, res) => {
    //     const charge = await stripe.charges.create({
    //         amount: 500,
    //         Currency: 'usd',
    //         descrption: "$5 for 5 credits",
    //         source: req.body.id
    //     })

    //     req.user.credits += 5
    //     const user = await req.user.save()
    //     res.send(user)
    console.log(req.body);
    
    })
}    