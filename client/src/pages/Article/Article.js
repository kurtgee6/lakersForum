import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Table, thead, tbody, Row, Col} from 'react-materialize';
import './Article.css';
import * as getAllArticle  from '../../actions/articleActions';

console.log(getAllArticle)

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

        componentDidMount() {
            this.props.getAllArticle();
        }
    
        grabbingData = (values) => {    
        
        this.setState({

                article: values,
                name: "",
                topic: "",
                location: "",
                image: "",
                createdAt: ""
            
            })
            this.props.loadArticle
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
        data: state.data
    };
}

export default withRouter(connect(mapStateToProps, getAllArticle )(Homepage));
