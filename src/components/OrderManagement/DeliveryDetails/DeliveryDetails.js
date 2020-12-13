import React from 'react';
import { useForm } from 'react-hook-form';
import './DeliveryDetails.css'


const DeliveryDetails = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
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

export default DeliveryDetails;