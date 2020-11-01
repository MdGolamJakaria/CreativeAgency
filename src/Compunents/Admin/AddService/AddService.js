import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { Input as AntdInput } from "antd";

const AddService = () => {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Services Added Successfully')
                }
            })
        console.log(data)
    };
    return (
        <div className='row'>
            <div className="col-md-1"></div>
            <div className="col-md-11">
                <form className='pb-5 pt-3 row' onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6">
                        <label htmlFor='title' className='mt-3'> Service title</label>
                        <Controller
                            className='form-control  py-4'
                            as={AntdInput}
                            placeholder="Enter title"
                            name="title"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                        />
                        <label htmlFor='Description' className='mt-3'> Description</label>
                        <Controller
                            className='form-control  py-4'
                            as={AntdInput}
                            placeholder="Enter description"
                            name="Description"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                        />
                        {errors.Description && <p>* Description is required</p>}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor='file' className='mt-3'> Icon</label>
                        <Controller
                            className='form-control inputfile'
                            id="file"
                            type='file'
                            as={AntdInput}
                            name="file"
                            placeholder='Files'
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                        />
                        {errors.file && <p>* Icon is required</p>}
                    </div>

                    <input className='form-control my-3 btn btn-dark' type="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;