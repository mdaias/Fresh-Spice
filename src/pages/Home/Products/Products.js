import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <div>
            <h1 className='mx-5 text-center text-4xl font-bold my-5'>Our Products {products.length}</h1>
            <div className='md:mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;