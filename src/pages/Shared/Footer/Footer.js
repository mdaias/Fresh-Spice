import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="text-center text-white" style={{backgroundColor: '#0a4275'}}>
                <div class="container p-6">
                    <div class="">
                        <p class="flex justify-center items-center">
                            <span class="mr-4">Register for free</span>
                            <button type="button" class="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                Sign up!
                            </button>
                        </p>
                    </div>
                </div>

                <div class="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    © 2021 Copyright:
                    <a class="text-white" href="https://tailwind-elements.com/">Tailwind Elements</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;