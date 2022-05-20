import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddNewSpice = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);


    const onSubmit = data => {
        console.log(data)
        const productData = {
            email:user.email,
            name:data.name,
            price:data.price,
            picture:data.picture,
            stock:data.stock,
            weight:data.weight,
            supplier:data.supplier,
            description:data.description    
        }
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    alert('Spice Item is successfully added')
                    reset()
                }
            })
    };

    return (
        <div className=' md:w-1/2 mx-auto py-20 bg-no-repeat' style={{ backgroundImage: 'url(https://i.ibb.co/bNmz3Bv/banner1.png)' }}>


            <div className='register-form container'>

                <h1 className='text-center font-bold md:text-5xl text-3xl text-sky-500'>Add New <span className=' text-orange-400'>Spice</span> Items</h1>

                <form onSubmit={handleSubmit(onSubmit)} className='mx-10'>

                    <input className='input block input-bordered text-xl font-bold input-info w-full mt-5' value={user?.email} disabled/>

                    <input className='input input-bordered text-xl font-bold block input-info w-full mt-5' placeholder='Product Name' required {...register("name", { required: true, maxLength: 20 })} />

                    <input className='input input-bordered text-xl font-bold block input-info w-full mt-5' placeholder='Supplier Name' required {...register("supplier", { required: true, maxLength: 20 })} />

                    <textarea className='input input-bordered text-xl font-bold block input-info w-full mt-5' placeholder='Description' required {...register("description")} />

                    <input className='input input-bordered text-xl font-bold block input-info w-full mt-5' placeholder='Product Price' type="number" required {...register("price")} />

                    <input className='input input-bordered text-xl font-bold block input-info w-full mt-5' placeholder='Quantity' type="number" required {...register("stock")} />

                    <input className='input input-bordered text-xl font-bold block input-info w-full mt-5' placeholder='Photo Url' type="text" required {...register("picture")} />

                    <input className='text-white flex justify-center cursor-pointer mt-10  bg-orange-500 font-bold p-2 md:w-80 w-56 mx-auto rounded-full' type="submit" value="Add Spice" />
                </form>
            </div>
        </div>
    );
};

export default AddNewSpice;