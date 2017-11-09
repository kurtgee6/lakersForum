import React, { Component } from "react";
import {Row, Col, Input} from 'react-materialize';
import './AddArticle.css'

class Userpage extends Component {
    render() {
        return(
            <div>
                <br/>
                <Row>
                    <Col s={3} className='grid-example'></Col>
                    <Col s={6}>
                            <Input defaultValue='Topic'/>
                            <Input id="userName" defaultValue='Username' />                       
                            <textarea defaultValue='Summary'/>
                            <button id="addArticle">Add My Rumor</button>
                    </Col>
                    <Col s={3} className='grid-example'></Col>
                </Row>
            </div>
        )
    }
}

export default Userpage;