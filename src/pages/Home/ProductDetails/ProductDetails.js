import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const navigate = useNavigate()

    const { name, description, price, stock, picture, _id, supplier, weight } = product;


    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId]);


    const handleRestock = event => {
        event.preventDefault();
    }

    return (

        <div>
            <div className='bg-no-repeat md:mx-20 md:py-16 h-screen' style={{ backgroundImage: 'url(https://i.ibb.co/CJLhLRW/spice-background.png)' }}>
                <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                    <figure><img src={picture} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h6 className='font-bold text-center text-sm'>ID: {_id}</h6>
                        <h2 class="card-title text-orange-500 text-2xl">{name}</h2>
                        <p className='text-sm font-semibold'>{description}</p>
                        <div className="flex justify-between">
                            <h6 className='text-lg font-bold'>Weight: {weight} kg</h6>
                            <h6 className='text-lg font-bold'>Stock: {stock} kg</h6>
                        </div>
                        <h6 className='font-bold text-lg'>Price: {price} Tk</h6>
                        <h4 className='font-bold text-lg'>Supplier: {supplier}</h4>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Delivered</button>
                        </div>
                    </div>
                </div>

                <div className='w-full mx-auto mt-10'>
                    <form onClick={handleRestock} className='flex justify-center items-center mx-auto'>
                        <input
                            type="number" name="number" placeholder='Restock Product Quentity'
                            className='p-3 bad mx-3 w-[50%] shadow-lg'
                        />
                        <input
                            className='text-white cursor-pointer bg-orange-500 font-bold p-2 w-32 rounded-full'
                            type="submit" value="Re-stock" />
                    </form>
                </div>
            </div>
            <div className='mt-12 mb-6 flex justify-center'>
                <button onClick={()=> navigate('/inventories')} className='text-white cursor-pointer bg-orange-500 font-bold p-2 w-80 mx-auto rounded-full'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default ProductDetails;