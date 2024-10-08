import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { Component } from "react";

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li>
                    <a href="/auth/google">LogIn with Google</a>
                </li>
            default: return <li>
                    <a href="/api/logout">Logout</a>
                </li>
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="left brand-logo">Emaily</Link>
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