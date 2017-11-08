import React, { Component } from "react";
import {Navbar, NavItem, Icon} from 'react-materialize'
import { Link } from "react-router-dom";
import './Nav.css';

class Nav extends Component {

    render() {
        return (
            <div>
                <Navbar brand='Los Angeles Lakers' right>
                    
                    <NavItem>
                        <Link to='/article'>
                            <Icon>search</Icon>
                        </Link>
                    </NavItem>

                    <NavItem>
                        <Link to=''>
                            <Icon>view_module</Icon>
                        </Link>
                    </NavItem>

                    <NavItem>
                        <Link to=''>
                            <Icon>refresh</Icon>
                        </Link>
                    </NavItem>

                    <NavItem>
                        <Link to=''>
                            <Icon>more_vert</Icon>
                        </Link>
                    </NavItem>

                </Navbar>
            </div>
        );
    }
}

export default Nav;