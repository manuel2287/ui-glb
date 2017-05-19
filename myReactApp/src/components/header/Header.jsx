import React, {Component} from 'react';
import Nav from '../nav/Nav.jsx'

class Header extends Component {
    render() {
        return (
            <header>
                {/* <Logo /> */}
                <Nav />
            </header>
        );
    }
}

export default Header;