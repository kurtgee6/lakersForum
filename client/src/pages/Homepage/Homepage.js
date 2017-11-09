import React, { Component } from "react";
import {Parallax} from 'react-materialize';
import './Homepage.css'

class Homepage extends Component {
    render() {
        return(
            <div>
                <Parallax imageSrc="https://s-media-cache-ak0.pinimg.com/originals/74/27/66/742766ac49506c900b614bfddba1b08c.jpg"/>
                <div id='sumContainer'>
                    <div className="row container">
                        <h3 className="header ">Join The Purple and Gold</h3>
                        <p className="text-darken-3 lighten-3">
                            Connect with the Los Angeles Lakers Community to talk about trades, rumors, players, records and more!
                        </p>
                    </div>
                </div>
                <Parallax imageSrc="https://img00.deviantart.net/eec9/i/2011/041/0/1/kobe_la_lakers_wallpaper_by_hfs991hfs-d397jxb.png"/>
            </div>
        )
    }
}

export default Homepage;