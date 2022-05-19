import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';

const ManageInventories = () => {
    const [products] = useProducts();
    const navigate = useNavigate()

    const handleDelete = () => {

    }

    return (
        <div>
            <div className='py-24 md:mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <div className="card bg-base-100 shadow-xl">
                        <figure><img src={product?.picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {product?.name}!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{product?.description}</p>
                            <h3 className='text-lg font-bold'>Weight: {product?.weight} kg</h3>
                            <div className='flex justify-between'>
                                <h3 className='text-lg font-bold'>Price: {product?.price} Tk</h3>
                                <h3 className='text-lg font-bold '>Stock: {product?.stock}</h3>
                            </div>
                            <h3 className='text-lg font-bold'>Supplier: <span className=' text-orange-600'>{product?.supplier}</span> </h3>
                            <div className="card-actions justify-center">
                                <button onClick={handleDelete} className='badge hover:text-white bg-slate-300 font-bold hover:bg-pink-500 cursor-pointer p-3 w-32 mt-5 badge-outline'>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='mb-6 flex justify-center'>
                <button onClick={() => navigate('/addspice')} className='text-white cursor-pointer bg-orange-500 font-bold p-2 w-80 mx-auto rounded-full'>Add New Spice</button>
            </div>
        </div>
    );
};

export default ManageInventories;