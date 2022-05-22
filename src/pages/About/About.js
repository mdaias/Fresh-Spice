import React from 'react';
import mypic from '../../images/mypic/myPic.jpg'

const About = () => {
    return (
        <div className='pt-24'>

            <div class="card card-side bg-base-100 shadow-xl md:mx-12 mx-2 flex-col md:flex-row">
                <figure>
                    <img src={mypic} alt="" />
                </figure>
                <div class="card-body items-center justify-center">
                    <h2 class="card-title font-bold text-3xl md:text-5xl">I'm Mohammad Aias</h2>
                    <h3 className='md:text-3xl text-2xl font-semibold mt-5 md:mt-10'>Front-End Web Developer</h3>
                    <p className='md:text-xl text-lg md:mt-10 mt-5 font-semibold'>My goal is work in any fast growing local or large multinational organization with immense responsibility. So that, my situational and transformational leadership style, problem solving, communication, language, and volunteering skills can be utilize efficiently to bring a positive change in the organization. In the long run I want to become a full stack web developer.</p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary">Facebook</button>
                    </div>
                </div>
            </div>



            {/* <div className="flex justify-center items-center">
                <div className='mx-5 mt-12'>
                    <img className='w-full' src={mypic} alt="" />
                </div>
                <div className='ml-10'>
                    <h1 className='font-bold'>Hi, I'm Mohammad Aias</h1>
                    <h3 className='font-bold'>Web Developer(Front-end)</h3>
                    <p>My goal is work in any fast growing local or large multinational organization with immense responsibility. So that, my situational and transformational leadership style, problem solving, communication, language, and volunteering skills can be utilize efficiently to bring a positive change in the organization. In the long run I want to become a full stack web developer.</p>
                </div>
            </div> */}
        </div>
    );
};

export default About;