import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className=" bg-indigo-700 flex items-center justify-between flex-wrap bg-teal-500 p-5">
                <div className="flex items-center flex-shrink-0 text-white mr-6 mx-8">
                    <svg className="animate-bounce-slow fill-current mr-2 w-1/3" width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <span className="font-serif lg:flex-grow text-2xl">EDU Assists</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow-0 lg:flex lg:items-center lg:w-auto">
                    <div className="font-serif lg:flex-grow text-2xl mr-40">
                        <Link to='/home' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:animate-bounce-slow mx-8">
                            Home
                        </Link>
                        <Link to='/courses' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:animate-bounce-slow mx-8">
                            Courses
                        </Link>
                        <Link to='/instructors' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:animate-bounce-slow mx-8">
                            Instructors
                        </Link>
                        <Link to='/aboutus' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:animate-bounce-slow mx-8">
                            About Us
                        </Link>
                    </div>
                </div>
            </nav>
            <div>

            </div>
        </div>
    );
};

export default Header;