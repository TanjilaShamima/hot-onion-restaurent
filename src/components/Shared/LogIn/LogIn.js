import React from 'react';
import logo from '../../../logo.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { logInUser } from '../CommonLoginManager';
import { addUserDetails } from '../../../Redux/actions/restaurentManageAction';
import { connect } from 'react-redux';


const LogIn = ({user, addUserDetails}) => {
    const history = useHistory();
    const location = useLocation();
    // console.log(user)
    const { register, handleSubmit, errors } = useForm();

    let { from } = location.state || { from: { pathname: "/" } }

    const onSubmit = data => {
        const{email, password} = data;
        logInUser(email,password)
        .then((user) =>{
            addUserDetails(user);
            history.replace(from);
        })
        .catch((error) =>{
            console.log(error)
        })
        
    }

    return (
        <div className="register text-center">
            <img style={{marginTop : '70px'}} width="200px" src={logo} alt=""/>

            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>              
                <input className="form-control" type="email" name="email" ref={register({ required: true })} placeholder="Email"/>           
                {errors.email && <span className="text-danger">This field is required</span>}

                <input className="form-control" type="password" name="password" ref={register({ required: true })} placeholder="Password"/>           
                {errors.password && <span className="text-danger">This field is required</span>}

                
                <input className="btn bg-danger btn-block text-light" type="submit" value="Log In" />
                <p>Create a New account?<Link to="/signup"> Click Here</Link></p>
            </form>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return{
        user : state.user
    }
}

const mapDispatchToProps ={
    addUserDetails : addUserDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);