import React, { Component } from "react";
import {Table, thead, tbody, Row, Col} from 'react-materialize';
import './Article.css';

class Homepage extends Component {
    render() {
        return(
            <div>
                <br />
                <Row>
                    <Col s={2} className='grid-example'></Col>
                    <Col s={8} className='grid-example'>
                    <Table>
                    <thead>
                        <tr>
                            <th data-field="id">username</th>
                            <th data-field="name">topic</th>
                            <th data-field="date">created at</th>
                        </tr>
                    </thead>

                        <tbody>
                            <tr>
                                <td>Ingram14</td>
                                <td>The lakers are above .500?</td>
                                <td>November 3, 2017</td>
                            </tr>
                            <tr>
                                <td>Lonzo2</td>
                                <td>LianGelo Ball arrested?</td>
                                <td>November 6, 2017</td>
                            </tr>
                            <tr>
                                <td>Kuzma0</td>
                                <td>Kuzma better than Lonzo?</td>
                                <td>November 7, 2017</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Col>
                    <Col s={2} className='grid-example'></Col>
                </Row>
            </div>
        )
    }
}

export default Homepage;