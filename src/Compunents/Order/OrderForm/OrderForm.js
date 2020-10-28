import React, { useContext } from 'react';
import { useForm, Controller } from "react-hook-form";
import { Input as AntdInput } from "antd";
import './OrderForm.css'
import { OrderContext } from '../../../App';

const OrderForm = () => {
    const [order, setorder] = useContext(OrderContext)
    console.log(order.service.service)
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className='row'>
            <div className="col-md-1"></div>
            <div className="col-md-7">
                {order.service.service && <form className='pb-5 pt-3' onSubmit={handleSubmit(onSubmit)}>
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
                        placeholder="Your email address"
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                    />
                    {errors.email && <p>* Email is required</p>}
                    <Controller
                        className='form-control mt-3 py-4'
                        as={AntdInput}
                        name="selectedService"
                        control={control}
                        defaultValue={order.service.service}
                        rules={{ required: true }}
                    />
                    {errors.selectedService && <p>* Service is required</p>}
                    <Controller
                        className='form-control mt-3 py-4'
                        as={AntdInput}
                        name="details"
                        placeholder='Your project details'
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                    />
                    {errors.details && <p>* Project details is required</p>}

                    <div className="row">
                        <div className="col-md-6">
                            <Controller
                                className='form-control mt-3 py-4'
                                as={AntdInput}
                                name="price"
                                placeholder='Price'
                                control={control}
                                defaultValue=""
                                rules={{ required: true }}
                            />
                            {errors.price && <p>* price is required</p>}
                        </div>
                        <div className="col-md-6">
                            <Controller
                                className='form-control mt-3 inputfile'
                                id="file"
                                type='file'
                                as={AntdInput}
                                name="file"
                                placeholder='Files'
                                control={control}
                                defaultValue=""
                                rules={{ required: false }}
                            />
                        </div>
                    </div>

                    <input className='form-control my-3 btn btn-dark' type="Submit" />
                </form>}
            </div>
        </div>
    );
};

export default OrderForm;