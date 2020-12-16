//import { Button } from 'bootstrap';
import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { addUserDetails } from '../../Redux/actions/restaurentManageAction';


const Header = (props) => {
    const history = useHistory();
    const {cart, user, addUserDetails} = props;

    //console.log(cart);

    const handleLogOut = () => {
        addUserDetails([]);
    }


    const handleCart = () => {
        history.push('/order-manage');
    }
    return (
        <Container>
            <Navbar>
                <Navbar.Brand to="/home">
                    <Link to="/"><img width="140" src={logo} alt=""/></Link>
                </Navbar.Brand>
                <Nav  className="mr-auto">
                    <Link style={{padding: '0px 5px'}} to="/home">Home</Link>
                    <Link style={{padding: '0px 5px'}} to="/food">Food</Link>
                </Nav>
                <Form inline>
                    <Button onClick={handleCart} variant="link"><FontAwesomeIcon className="bg-light text-danger" icon={faShoppingCart} />{cart.length}</Button>

                    {user.email?
                    <>
                        <h6>{user.displayName}</h6>
                        <Button onClick={handleLogOut}  style={{color:'black'}} variant="link">LogOut</Button>
                    </>
                    
                    : 
                    
                    <>
                        <Button style={{color:'black'}} variant="link"><Link to="/login">Login</Link></Button>

                        <Button style={{borderRadius:'20px'}} variant="danger"><Link className="text-light" to="/signup">Sign Up</Link></Button>
                    </>}
                </Form>
            </Navbar>
            
        </Container>
    );
};

const mapStateToProps = (state) =>{
    return{
        user : state.user,
        cart : state.cart
    }
}

const mapDispatchToProps = {
    addUserDetails : addUserDetails
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);