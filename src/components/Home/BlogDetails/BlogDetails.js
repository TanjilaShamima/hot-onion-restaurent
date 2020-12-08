import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const BlogDetails = (props) => {
    const {image, name, description} = props.blog;
    return (

                <Card className="md-3 mt-3" style={{ width: '30%', height : '500px', padding : '9px', border : 'none' }}>
                    <Card.Img height="250" variant="top" src={image} />
                    <Card.Body>
                        <Row>
                            <Col md="2">
                            <FontAwesomeIcon icon={faCoffee} />
                            </Col>
                            <Col md="10">
                                <p>{name}</p>
                                <p><small>{description}</small></p>
                                <Card.Link className="align-content-right" href="#">See More</Card.Link>
                            </Col>
                        </Row>                                          
                    </Card.Body>
                </Card>
    );
};

export default BlogDetails;