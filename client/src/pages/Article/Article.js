import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Table, thead, tbody, Row, Col} from 'react-materialize';
import './Article.css';
import { grabArticle } from '../../actions/articleActions'

class Homepage extends Component {
    
    constructor(props) {
        
        super(props)
    
        this.state = {
            article: [],
            name: '',
            topic: '',
            location: '',
            image: '',
            createdAt: ''
        }

    }
        grabbingData = (values) => {    
        
        this.setState({values});

        if (true) {
            this.props.grabArticle({
                name: this.state.values.name,
                topic: this.state.values.topic,
                location: this.state.values.location,
                image: this.state.values.image,
                createdAt: this.state.values.createdAt
              })
            } else {
                console.log('no data');
            }

        }
    
    render() {
        return(
            <div>
                <br />
                <Row>
                    <Col s={2} className='grid-example'></Col>
                    <Col s={8} className='grid-example'>
                
                    {(this.state && this.state.article && this.state.article.length) ? (
                        <div>
                        {this.state.article.map(items => (

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
                                        <td>{items.name}</td>
                                        <td>{items.topic}</td>
                                        <td>{items.createdAt}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        ))}
                    </div>
                    ) : (
                    <h3>No Results to display, please try again later.</h3>
                    )}
                   
                    </Col>
                    <Col s={2} className='grid-example'></Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.name,
        topic: state.topic,
        location: state.location,
        image: state.image,
        createdAt: state.createdAt
    };
}

export default withRouter(connect(mapStateToProps, { grabArticle })(Homepage));
