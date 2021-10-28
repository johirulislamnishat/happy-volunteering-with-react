import React from 'react';
import './Banner.css'
import Navbar from './Navbar';

const Banner = () => {
    return (
        <div>
            {/* header start */}
            <div className='banner'>
                <Navbar></Navbar>

                <div className='max-w-6xl mx-auto'>
                    <h1 className='text-center text-3xl mt-24'>I grow by helping people in need.</h1>

                    <div className='flex justify-center mt-6'>
                        <input className='outline-none py-2 px-2 rounded-l-md' type="text" placeholder='Search....' />
                        <button className='text-white bg-blue-500 py-2 px-2 rounded-r-md'>Search</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;