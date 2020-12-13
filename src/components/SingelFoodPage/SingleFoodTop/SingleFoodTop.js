import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const SingleFoodTop = (props) => {
    const [productQuantity, setProductQuantity] = useState(1);
    const {selectedFood} = props;

    const handleMinus = () => {
        if(productQuantity>1){
            setProductQuantity(productQuantity-1);
        }
    }
    const handleAddProductToCart = () => {

    }
    // console.log(selectedFood)
    
    return (
            <Row>
                <Col>
                    <div className="mt-2 text-center">
                        <img width={400} src={selectedFood.image} alt=""/>
                    </div>
                </Col>
                <Col className="d-flex  align-content-center flex-wrap">
                    <h2 variant="xxLarge">{selectedFood.name}</h2>
                    <p className="text-muted mt-3">{selectedFood.big_description}</p>
                    <Row style={{width: '100%'}}  className="d-flex">
                        <Col md={3} >
                            <h3 variant="xxLarge">${selectedFood.price}</h3>
                        </Col>
                        <Col md={3} className="d-flex align-content-right justify-content-around border rounded-pill">
                            <FontAwesomeIcon style={{marginTop : '10px'}} onClick={handleMinus} icon={faMinus} />
                            <h4 variant="xxLarge">{productQuantity}</h4>
                            <FontAwesomeIcon style={{marginTop : '10px'}} onClick={()=>setProductQuantity(productQuantity+1)} icon={faPlus} className="text-danger" />
                        </Col>
                    </Row>
                    <br/>
                    
                    <Row>
                        <Button onClick={handleAddProductToCart} className="rounded-pill mt-3 mb-3" variant="danger"><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</Button>
                    </Row>
                </Col>
            </Row>
            
    );
};

export default SingleFoodTop;