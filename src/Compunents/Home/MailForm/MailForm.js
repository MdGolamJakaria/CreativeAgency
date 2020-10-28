import React from 'react';
import './MailForm.css'
import { useForm } from "react-hook-form";
import Footer from '../../Shared/Footer/Footer';

const MailForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='row mail-section'>
            <div className="col-md-6 p-5">
                <h1>Let us handle your <br /> project, professionally.</h1>
                <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
            </div>
            <div className="col-md-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control mt-2' name="email" type='email' placeholder="Enter Your email" ref={register({ required: true })} />
                    {errors.email && <span style={{ color: "red" }} >* This field is required</span>}

                    <input className='form-control mt-2' name="firstName" placeholder="Enter Your Name / Company's Name" ref={register({ required: true })} />
                    {errors.firstName && <span style={{ color: "red" }} >* This field is required</span>}

                    <textarea className='form-control mt-2' name="massage" placeholder='Massage' rows="10"></textarea>
                    {errors.massage && <span style={{ color: "red" }} >* This field is required</span>}
                    <input className='btn btn-dark mt-3' type="submit" value='Send' />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MailForm;