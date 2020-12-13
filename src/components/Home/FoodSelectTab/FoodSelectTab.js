import React, { useEffect, useState } from 'react';
import { Container, Tab, Tabs, Button } from 'react-bootstrap';
import { fakeFoodIteams } from '../../../fakeData/fakeFoodIteams';
import FoodIteam from '../FoodIteam/FoodIteam';
import './FoodSelectTab.css'

const FoodSelectTab = () => {
    const [foodIteams, setFoodIteams] = useState([]);


    useEffect(() => {
        setFoodIteams(fakeFoodIteams)
    }, [])

    //console.log(foodIteams)

    const breakFast = foodIteams.filter(food => food.category === 'breakfast');
    const lunch = foodIteams.filter(food => food.category === 'lunch');
    const dinner = foodIteams.filter(food => food.category === 'dinner');

    return (
        <Container className="food-selector">
            <Tabs defaultActiveKey="lunch" id="uncontrolled-tab-example">
               <Tab  eventKey="breakfast" title="Breakfast">
                   <div className="d-flex flex-wrap justify-content-around mt-3 mb-3">
                    {
                            breakFast && breakFast.map(food => <FoodIteam key={food.foodId} food={food} ></FoodIteam>)
                        }
                   </div>
                   
                </Tab>
                <Tab eventKey="lunch" title="Lunch">
                    <div className="d-flex flex-wrap justify-content-around mt-3 mb-3">
                        {
                        lunch && lunch.map(food => <FoodIteam key={food.foodId} food={food}></FoodIteam>)
                        }
                    </div>
                  
                </Tab>
                <Tab eventKey="dinner" title="Dinner">
                    <div className="d-flex flex-wrap justify-content-around mt-3 mb-3">
                        {
                            dinner && dinner.map(food => <FoodIteam key={food.foodId} food={food}></FoodIteam>)
                        }

                    </div>
                    
                </Tab>
            </Tabs>
            <div className="text-center">
                <Button variant="secondary" disabled>Checkout Your Food</Button> 
            </div>
                      
            
        </Container>
    );
};

export default FoodSelectTab;