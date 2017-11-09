import React, { Component } from "react";
import {Navbar} from 'react-materialize'
import { NavLink } from "react-router-dom";
import './Nav.css';

class Nav extends Component {

    render() {
        return (
            <div>
                <Navbar brand='Los Angeles Lakers' right>

                <li>
                    <NavLink to="/article">
                        Articles
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/addArticle">
                        Add Rumors
                    </NavLink>
                </li>
            
                </Navbar>
            </div>
        );
    }
}

export default Nav;