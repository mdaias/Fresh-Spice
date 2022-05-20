import React from 'react';

const Gallery = () => {
    return (
        <div className=' my-10 md:my-24'>
            <div className='font-bold text-center mb-12'>
                <h1 className='text-3xl md:text-5xl'><span className=' text-fuchsia-600'>Gallery </span> of Our Factory</h1>
                <p className='text-lg w-1/3 mx-auto mt-10'>We are delivering our best quality product directly from indonesia farmer to you. We choose the best quality product fresh from our farmer</p>
            </div>
            <div className='grid md:grid-cols-4 grid:cols:1 gap-5 mx-5'>
                <div className=' w-full h-60 shadow-lg'>
                    <img className=' h-full w-full' src="https://i.ibb.co/6D1Q9kC/img2.png" alt="" />
                </div>
                <div className=' w-full h-60 shadow-lg'>
                    <img className=' h-full w-full' src="https://i.ibb.co/7YP8SLH/img3.png" alt="" />
                </div>
                <div className=' w-full h-60 shadow-lg'>
                    <img className=' h-full w-full' src="https://i.ibb.co/PrDR1Vn/img4.png" alt="" />
                </div>
                <div className=' w-full h-60 shadow-lg'>
                    <img className=' h-full w-full' src="https://i.ibb.co/HhQnDRd/img5.png" alt="" />
                </div>
                <div className=' w-full h-60 shadow-lg'>
                    <img className=' h-full w-full' src="https://i.ibb.co/Y2vSHzx/img6.png" alt="" />
                </div>
                <div className=' w-full h-60 shadow-lg'>
                    <img className=' h-full w-full' src="https://i.ibb.co/6FxSwHP/img1.png" alt="" />
                </div>
                <div className=' w-full h-60 shadow-lg'>
                    <img className=' h-full w-full' src="https://i.ibb.co/8jthcNv/img7.png" alt="" />
                </div>
                <div className=' w-full h-60 shadow-lg'>
                    <img className=' h-full w-full' src="https://i.ibb.co/tsQ86yn/img8.png" alt="" />
                </div>
                <div className=' w-full h-60 shadow-lg'>
                    <img className=' h-full w-full' src="https://i.ibb.co/9gcnJCP/img9.png" alt="" />
                </div>
                <div className=' w-full h-60 shadow-lg'>
                    <img className=' h-full w-full' src="https://i.ibb.co/rwLhQVw/img10.png" alt="" />
                </div>
                <div className=' w-full h-60 shadow-lg'>
                    <img className=' h-full w-full' src="https://i.ibb.co/cTwvnts/img11.png" alt="" />
                </div>
                <div className=' w-full h-60 shadow-lg'>
                    <img className=' h-full w-full' src="https://i.ibb.co/pw0xC3V/img12.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;