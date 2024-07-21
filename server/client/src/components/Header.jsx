import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { Component } from "react";

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return "Still deciding"
            case false:
                return "Logged out!"
            default: return "Logged In!"
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="left brand-logo">Emaily</Link>
                    <ul className="right">
                        <li>
                            {this.renderContent()}
                            {/* <Link to="/auth/google" target="_blank">LogIn with Google</Link> */}
                        </li>
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