import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const scrollToY = () => {
        window.scrollTo({
            top: 200,
            behavior: 'smooth',
        });
    };
    scrollToY();
    return (
        <nav class="bg-gradient-to-r from-transparent
        via-black to-transparent background-animate border-b py-6 sticky top-0 z-50">
            <div class="flex justify-between items-center">
                <div class="font-semibold ml-6 mr-2 text-xl">
                    <div class="relative mx-auto animate-bounce">
                        <div class="mx-auto h-9 w-9 animate-pulse rounded-full bg-white"></div>
                        <span class="absolute flex h-6 w-6 animate-spin">
                            <span class="h-4 w-4 rounded-full animate-pulse bg-green-400"></span>
                        </span>
                    </div>
                </div>
                <div class="hidden mx-auto lg:flex space-x-4 ">
                    <Link to="/" class="inline-flex mx-auto text-white rounded-lg">
                        <div class="font-semibold text-5xl" onClick={scrollToY}>
                            AU
                        </div>
                    </Link>
                </div>
                <div class="lg:hidden mx-auto space-x-4 inline-flex">
                    <Link to="/" class="inline-flex mx-auto text-white rounded-lg">
                        <div class="font-semibold text-4xl" onClick={scrollToY}>
                            AU
                        </div>
                    </Link>
                </div>
                <Link to="/project" class=" text-white mr-6 rounded-lg hover:animate-pulse">
                    <div class="font-semibold text-3xl" onClick={scrollToY}>
                        <svg
                            class="w-8 h-8 mx-1 text-white dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path
                                d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                        </svg>
                    </div>
                </Link>
            </div>

        </nav >
    )
}

export default Navbar;