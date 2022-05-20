import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
    const [user] = useAuthState(auth)
    const email = user.email
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `https://obscure-earth-95050.herokuapp.com/myproduct?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [email])


    //Handle delete
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure! delete this items?');
        if (proceed) {
            const url = `https://obscure-earth-95050.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }

    return (
        <div className="py-24">
            <h1 className="py-10 text-center text-3xl md:text-5xl font-bold">My All Products</h1>
            <div className='md:mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-12'>
                {
                    products.map(product => <div key={product._id} className="card bg-base-100 shadow-xl">
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
                                <button onClick={() => handleDelete(product._id)} className='badge hover:text-white bg-slate-300 font-bold hover:bg-pink-500 cursor-pointer p-3 w-32 mt-5 badge-outline'>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;