import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { Component } from "react";
import Payments from "./Payments";

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li>
                    <Link to="/auth/google">Login with Google</Link>
                </li>
            default: return [
                <li className="" key={1}>
                    <Payments />
                </li>,
                <li key={2}>
                    <Link to="/api/logout">Logout</Link>
                </li>
            ]
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? "/surveys" : "/"} className="left brand-logo">Emaily</Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);