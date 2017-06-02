import React, {Component} from 'react';
import {navConfig} from './nav.config';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends Component {
    createNavOptions() {
        return navConfig.map((option, index) => {
                        return <li key={index}> 
                            <Link to={option.path}> {option.navOption} </Link>
                        </li>
                    }
                )
    }
    
    render() {
        return (
            <ul>
                {this.createNavOptions()}
            </ul>
        );
    }
}

export default Nav;