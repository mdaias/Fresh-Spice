import { useNavigate } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();
    const navigate = useNavigate();

    return (
        <div className='mt-10 md:mx-24 md:mt-20 mb-10'>
            <h1 className='mx-5 text-center font-bold text-xl md:text-6xl mb-2'>Garden <span className=' text-orange-600'>Fresh Picks</span>, Just For You</h1>
            <h3 className='text-xs md:text-3xl font-bold text-center md:mb-16 mb-10'>Our Products Guarantee A Healthy And Tasty Meal</h3>
            <div className='md:mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.slice(0,6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <div className='mb-6 mt-12 flex justify-center'>
                <button onClick={() => navigate('/inventories')} className='text-white cursor-pointer bg-orange-500 font-bold p-2 w-80 mx-auto rounded-full'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default Products;