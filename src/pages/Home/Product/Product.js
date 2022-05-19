import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, description, price, stock, picture, _id, supplier, weight } = product;
    // console.log(product)

    const navigate = useNavigate()
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <h3 className='text-lg font-bold'>Weight: {weight} kg</h3>
                <div className='flex justify-between'>
                    <h3 className='text-lg font-bold'>Price: {price} Tk</h3>
                    <h3 className='text-lg font-bold '>Stock: {stock}</h3>
                </div>
                <h3 className='text-lg font-bold'>Supplier: <span className=' text-orange-600'>{supplier}</span> </h3>
                <div className="card-actions justify-center">
                    <button onClick={()=> navigate(`/product/${_id}`)} className='badge hover:text-white bg-slate-300 font-bold hover:bg-pink-500 cursor-pointer p-3 w-32 mt-5 badge-outline'>Stock Update</button>
                </div>
            </div>
        </div>
    );
};

export default Product;