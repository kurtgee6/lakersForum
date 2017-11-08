import React, { Component } from "react";
import {Navbar, NavItem, Icon} from 'react-materialize'
import './Nav.css';

class Nav extends Component {

    render() {
        return (
            <div>
                <Navbar brand='Los Angeles Lakers' right>
                    <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
                </Navbar>
            </div>
        );
    }
}

export default Nav;