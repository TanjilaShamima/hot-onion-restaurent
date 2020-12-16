import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToCart, emptyCart } from '../../../Redux/actions/restaurentManageAction';
import './DeliveryDetails.css'


const DeliveryDetails = () => {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        history.push('/order-placed');
        
    }
    return (
        <div>
            <h6>Edit Delivery Details</h6>
            <hr style={{width : '90%', float : 'left'}}/>
            <form className="delivery-form  d-block" onSubmit={handleSubmit(onSubmit)}>
                
                <input className="form-control" type="text" name="deliverySystem" defaultValue="Delivery to door" ref={register({ required: true })} readOnly/>

                <input className="form-control" type="text" name="roadNo" ref={register({ required: true })} placeholder="Road No"/>           
                {errors.roadNo && <span>This field is required</span>}

                <input className="form-control" type="text" name="flatNo" ref={register({ required: true })} placeholder="Flat, Suit or Floor"/>           
                {errors.flatNo && <span>This field is required</span>}

                <input className="form-control" type="text"  name="businessName" ref={register({ required: true })} placeholder="Business Name"/>           
                {errors.businessName && <span>This field is required</span>}

                <textarea as="text-area" className="form-control"   name="deliveryInstruction" ref={register({ required: true })} placeholder="Add Delivery Instruction"/>           
                {errors.deliveryInstruction && <span>This field is required</span>}
                
                <input className="btn bg-danger btn-block text-light" type="submit" value="Save & Continue" />
            </form>
        </div>
    );
};
// const mapStateToProps = state =>{
//     return{
//         cart : state.cart
//     }
// }

// const mapDispatchToProps = {
//     emptyCart : emptyCart
// }




export default DeliveryDetails;