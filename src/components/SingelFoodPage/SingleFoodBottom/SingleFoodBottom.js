import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SingleFoodBottom = (props) => {
    console.log(props.food);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase : 'liner'
      };
    return (
        <div className="w-100">
            <Slider className="d-flex flex-wrap" {...settings}>
                {props.food.map(food => 
                    <div>
                        <Card className="border border-danger m-3 rounded text-center">
                            <Link style={{textDecoration : 'none', color : 'gray' }} to={"/food/"+food.foodId}>
                                <Card.Img className="card-image" variant="top" src={food.image} />
                                <Card.Body>
                                    <h6><Link to={"/food/"+food.foodId}>{food.name}</Link></h6>
                                    <Card.Text>
                                        {food.short_description}
                                    </Card.Text>
                                    <h4>${food.price}</h4>
                                </Card.Body>
                            </Link>
                        </Card>
                    </div>)}
            </Slider>
        </div>
    );
};

export default SingleFoodBottom;