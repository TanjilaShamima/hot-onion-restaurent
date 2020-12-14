import React from 'react';
import './Register.css'
import logo from '../../../logo.png'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signUpUser } from '../CommonLoginManager';
import { addUserDetails } from '../../../Redux/actions/restaurentManageAction';
import { connect } from 'react-redux';


const Register = ({addUserDetails}) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const{name, email, password} = data;
        signUpUser(name, email, password)
        .then((user) => {
            addUserDetails(user);
        })
        .catch((err) =>{
            console.log(err);
        })

    }
    // const handleSubmit = () => {
        

    // }
    return (
        <div className="register text-center">
            <img style={{marginTop : '50px'}} width="200px" src={logo} alt=""/>


            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" type="text" name="name" ref={register({ required: true })} placeholder="Name"/>           
                {errors.name && <span className="text-danger">This field is required</span>}


                <input className="form-control" type="email" name="email" ref={register({ required: true })} placeholder="Email"/>           
                {errors.email && <span className="text-danger">This field is required</span>}

                <input className="form-control" type="password" name="password" ref={register({ required: true })} placeholder="Password"/>           
                {errors.password && <span className="text-danger">This field is required</span>}

                <input className="form-control" type="password" name="confirmPassword" ref={register({ required: true })} placeholder="Confirm Password"/>           
                {errors.confirmPassword && <span className="text-danger">This field is required</span>}

                
                <input className="btn bg-danger btn-block text-light" type="submit" value="Sign Up" />
                <p>Already have an Account?<Link to="/login"> Click Here</Link></p>
            </form>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return{
        user: state.user
    }
}

const mapDispatchToProps = {
    addUserDetails : addUserDetails
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);