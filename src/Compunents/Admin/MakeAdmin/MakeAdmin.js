import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { Input as AntdInput } from "antd";

const MakeAdmin = () => {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className='row'>
            <div className="col-md-1"></div>
            <div className="col-md-11">
                <form className='pb-5 pt-3 row' onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-9">
                        <label htmlFor='email' className='mt-3'>Email</label>
                        <Controller
                            className='form-control  py-4'
                            as={AntdInput}
                            placeholder="Enter email"
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                        />
                        {errors.email && <p>* Email is required</p>}
                    </div>
                    <div className="col-md-2">
                        <input className='form-control my-3 btn btn-dark mt-5' type="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;