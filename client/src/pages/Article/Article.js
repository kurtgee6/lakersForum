import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Table, thead, tbody, Row, Col} from 'react-materialize';
import './Article.css';
import * as getAllArticle  from '../../actions/articleActions';

class Homepage extends Component {

    constructor(props) {

        super(props)

    }

        componentDidMount() {
            this.props.getAllArticle();
        }

    render() {
        console.log(this.props.state);
        return(
            <div>
                <br />
                <Row>
                    <Col s={2} className='grid-example'></Col>
                    <Col s={8} className='grid-example'>
                
                    {(this.props && this.props.article && this.props.article.length) ? (
                        <div>

                        <Table>
                            <thead>
                                <tr>
                                    <th data-field="id">username</th>
                                    <th data-field="name">topic</th>
                                    <th data-field="date">created at</th>
                                </tr>
                            </thead>
                        </Table>

                        {this.props.article.map(items => (

                            <Table>
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

const mapStateToProps = (state) => {
    return {
        article: state.allArticle.article,
    };
}

export default withRouter(connect(mapStateToProps, getAllArticle )(Homepage));