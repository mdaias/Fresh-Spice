import React from 'react';

const Product = ({ product }) => {
    const { name, description, price, stock, picture } = product;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <h3 className='text-sm font-bold'>Weight: 1 kg</h3>
                <div className='flex justify-between'>
                    <h3 className='text-lg font-bold'>Price: {price} Tk</h3>
                    <h3 className='text-lg font-bold '>Stock: {stock} kg</h3>
                </div>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Product;