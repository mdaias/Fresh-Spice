import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className='md:mt-24 mt-10 md:mb-16 mb-12 md:mx-32' style={{backgroundImage:'url(https://i.ibb.co/CJLhLRW/spice-background.png)'}} >
                <h1 className='text-xl text-orange-600 md:text-5xl font-bold text-center mt-10  md:mb-24'>Our Healthy Mixes Create the Perfect Blend of Taste and Health</h1>
                <div className='flex flex-col md:flex-row gap-5 justify-evenly items-center mt-6 md:mt-12'>
                    <div className="card md:w-96 bg-base-100 shadow-lg">
                        <figure><img src="https://i.ibb.co/7g859qf/planet-earth.png" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Pure as Nature Intended</h2>
                            <p>Our key ingredients are made and sourced from strictly natural produce. We conduct several quality checks to ensure all the products match our high standards before the final product is packed and sent for sale.</p>
                        </div>
                    </div>
                    <div className="card md:w-96 bg-base-100 shadow-lg">
                        <figure><img src="https://i.ibb.co/QfGjN3f/heartbeat.png" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Your Healthy Kitchen Buddy</h2>
                            <p>If a dog chews shoes whose shoes does he choose?Our range of ready to cook products are perfect to create a healthy, delicious meal. Our well-curated products help to save time to prepare elaborate dishes.</p>
                        </div>
                    </div>
                    <div className="card md:w-96  bg-base-100 shadow-lg">
                        <figure><img src="https://i.ibb.co/XJNNmMH/seasoning.png" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Spices” Fresh From the Roots</h2>
                            <p>'Spices' are the soul of any food preparation. They appear to look like colourful powders with heavenly aromas. Without them, your food would never be the same.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Products></Products>
          
        </div>
    );
};

export default Home;