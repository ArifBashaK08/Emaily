import React, { Component } from "react"; 
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions" 

class Payments extends Component {

    render() {

        return (
            <StripeCheckout
                name="Emaily"
                description="$5 for 5 email surveys"
                amount={500}
                token={token => actions.handleToken(token)}
                stripeKey={import.meta.env.VITE_API_STRIPE_KEY}
            >
                <button to={"/api/stripe"} className="btn">Add Credits</button>
            </StripeCheckout>
        ); 
    }
}

export default connect(null,actions)(Payments);