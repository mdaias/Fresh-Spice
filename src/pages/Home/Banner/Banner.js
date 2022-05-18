import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img alt='' src="https://i.ibb.co/bNmz3Bv/banner1.png" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img alt='' src="https://i.ibb.co/NYPqTQ2/banner2.png" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img alt='' src="https://i.ibb.co/6vz1g30/banner3.png" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img alt='' src="https://i.ibb.co/CJLhLRW/spice-background.png" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;