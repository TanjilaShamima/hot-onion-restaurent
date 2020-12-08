import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FoodIteam.css'

const FoodIteam = (props) => {
    const{foodId,image, name, short_description, price} = props.food;
    return(
            <Card className="food-card m-3 rounded text-center">
                <Link style={{textDecoration : 'none', color : 'gray' }} to={"/food/"+foodId}>
                    <Card.Img className="card-image" variant="top" src={image} />
                    <Card.Body>
                        <h6><Link to={"/food/"+foodId}>{name}</Link></h6>
                        <Card.Text>
                            {short_description}
                        </Card.Text>
                        <h4>${price}</h4>
                    </Card.Body>
                </Link>
            </Card>
    );
};

export default FoodIteam;