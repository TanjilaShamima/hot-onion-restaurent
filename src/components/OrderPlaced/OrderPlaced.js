import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import orderPlacedImage from '../../Image/Group 1151.png';
import deliveryBoy from '../../Image/Group 1152.png';

const OrderPlaced = () => {
    return (
        <Container>
            <div  className="d-flex justify-content-around">
                <div style={{width : '35%', marginTop : '40px'}}>
                    <div>
                        <img src={orderPlacedImage} alt=""/> 
                    </div>                  
                </div>
                <div style={{width : '35%', marginBottom : '60px', marginTop : '40px'}}>
                    <div  style={{marginBottom : '30px', padding : '20px 3px', backgroundColor : '#6c757d47'}}  className="rounded text-center">
                        <div>
                            <img className="py-20 mt-30" width="80" src={orderPlacedImage} alt=""/>
                        </div>
                        <div style={{width : '70%', margin : '10px auto'}} className="bg-light rounded p-2">
                            <ul>
                                <li>Your Location</li>
                                <p><small>107 Road 8</small></p>
                            </ul>
                            

                            <ul>
                                <li>Shop Address</li>
                                <p><small>107 Road 8</small></p>
                            </ul>
                            
                        </div>
                        <div>
                            <h5>9.30</h5>
                            <p><small>Estimate Delivery Time</small></p>
                        </div>
                        <div style={{width : '70%', margin : '10px auto'}} className="bg-light rounded p-2">
                            <Row>
                                <Col>
                                    <img src={deliveryBoy} width={50} alt=""/>
                                </Col>
                                <Col>
                                    <h6>Hamim</h6>
                                    <p><small>Your Rider</small></p>
                                </Col>
                            </Row>
                            
                        </div>
                        <Button style={{width : '70%'}} variant="danger">Confirm</Button>

                    </div>
                    
                    
                </div>
            </div>
        </Container>
    );
};

export default OrderPlaced;