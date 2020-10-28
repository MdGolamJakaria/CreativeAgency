import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { Input as AntdInput } from "antd";

const Review = () => {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className='row'>
            <div className="col-md-1"></div>
            <div className="col-md-7">
                <form className='pb-5 pt-3' onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        className='form-control mt-3 py-4'
                        as={AntdInput}
                        placeholder="Your Name / Company's Name"
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                    />
                    {errors.name && <p>* Name is required</p>}
                    <Controller
                        className='form-control mt-3 py-4'
                        as={AntdInput}
                        placeholder="Designation"
                        name="Designation"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                    />
                    {errors.Designation && <p>* Designation is required</p>}
                    <Controller
                        className='form-control mt-3 py-4'
                        as={AntdInput}
                        name="review"
                        placeholder="Description"
                        control={control}
                        defaultValue=''
                        rules={{ required: true }}
                    />
                    {errors.review && <p>* Your Review is required</p>}
                    <input className='form-control my-3 btn btn-dark' type="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;