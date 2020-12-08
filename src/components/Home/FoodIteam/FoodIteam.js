import React from 'react';
import { Card } from 'react-bootstrap';
import './FoodIteam.css'

const FoodIteam = (props) => {
    const{foodId,image, name, short_description, full_description, price} = props.food
    return (
            <Card className="d-flex justify-content-center align-content-center md-3 rounded" style={{ width: '27%', textAlign : 'center', float : 'left', margin : '3%' }}>
                <Card.Img className="card-image" variant="top" src={image} />
                <Card.Body>
                    <h6>{name}</h6>
                    <Card.Text>
                        {short_description}
                    </Card.Text>
                    <h4>${price}</h4>
                </Card.Body>
            </Card>
    );
};

export default FoodIteam;