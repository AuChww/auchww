import React from "react";
import { Img } from 'react-image';
import about from "../image/1.jpg";
import activity from "../image/2.jpg";

function About() {
    const pageMedium = {
        marginTop: '0px', // Adjust the margin to accommodate the fixed navbar
        padding: '20px', // Add padding to the page content
    };
    const myComponent = () => <Img src="https://www.example.com/foo.jpg" />
    return (
        <div class="bg-zinc-700 grid lg:grid-cols-3 grid-cols-1" style={pageMedium}>
            <div class="p-4 bg-zinc-700  font-sans">
                <div class="inline-flex mt-10">
                    <div class=" text-3xl text-bold">
                        Chanawut Wuttinun
                    </div>
                    <a href="https://github.com/AuChww" class="ml-16 inline-flex items-center justify-center px-5 py-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-zinc-100 dark:text-gray-400 dark:bg-zinc-800 dark:hover:bg-zinc-600 dark:hover:text-white">
                        <i class="fa fa-github"></i>
                        <span class="w-full">Github</span>
                        <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
                <div class="ml-3 text-gray-300">
                    chanawut.w@ku.th
                </div>
                <div class="my-4 ml-2 mt-10">
                    <div class="grid grid-cols-3">
                        <div>
                            <img src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png" class="h-16"></img>
                        </div>
                        <div>
                            <div class="mt-2 ml-1">
                                Java Project
                            </div>
                            <a href="https://github.com/CS211-652/cs211-652-project-aeiou" class="inline-flex items-center justify-center px-5 py-1 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-zinc-100 dark:text-gray-400 dark:bg-zinc-800 dark:hover:bg-zinc-600 dark:hover:text-white">
                                <i class="fa fa-github"></i>
                                <span class="w-full">Github</span>
                                <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="my-4 ml-2">
                    <div class="grid grid-cols-3">
                        <div class="mt-4">
                            <img src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png" class="h-12"></img>
                        </div>
                        <div>
                            <div class="mt-2 ml-1">
                                Webtech Project
                            </div>
                            <a href="https://github.com/naiithink/ku-2023-01418442-nak-muay" class="inline-flex items-center justify-center px-5 py-1 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-zinc-100 dark:text-gray-400 dark:bg-zinc-800 dark:hover:bg-zinc-600 dark:hover:text-white">
                                <i class="fa fa-github"></i>
                                <span class="w-full">Github</span>
                                <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="my-4 ml-2">
                    <div class="grid grid-cols-3">
                        <div class="inline-flex mt-4">
                            <img src="https://static-00.iconduck.com/assets.00/vue-icon-2048x1766-ntogpmti.png" class="h-11"></img>
                            <img src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png" class="ml-4 h-12"></img>
                        </div>
                        <div>
                            <div class="mt-2 ml-1">
                                Webtech Project
                            </div>
                            <a href="https://github.com/AuChww/sa-project-front" class="inline-flex items-center justify-center px-5 py-1 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-zinc-100 dark:text-gray-400 dark:bg-zinc-800 dark:hover:bg-zinc-600 dark:hover:text-white">
                                <i class="fa fa-github"></i>
                                <span class="w-full">Front end</span>
                                <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                        <div class="mt-8">
                            <a href="https://github.com/Thanakorn0Khonman/sa-project-back" class="inline-flex items-center justify-center px-5 py-1 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-zinc-100 dark:text-gray-400 dark:bg-zinc-800 dark:hover:bg-zinc-600 dark:hover:text-white">
                                <i class="fa fa-github"></i>
                                <span class="w-full">Back end</span>
                                <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="my-4 ml-2">
                    <div class="grid grid-cols-3">
                        <div class="inline-flex mt-4">
                            <img src="https://cdn-icons-png.flaticon.com/512/2246/2246713.png" class="h-11"></img>
                        </div>
                        <div>
                            <div class="mt-2 ml-1">
                                SA Project
                            </div>
                            <a href="https://docs.google.com/document/d/1aghDKiRVmnBj_UKUSKRFGDN-PsXuDzC9cDop3mFYDgY/edit?usp=sharing" class="inline-flex items-center justify-center px-5 py-1 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-zinc-100 dark:text-gray-400 dark:bg-zinc-800 dark:hover:bg-zinc-600 dark:hover:text-white">
                                <i class="fa fa-github"></i>
                                <span class="w-full">Docs</span>
                                <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden md:hidden lg:inline">
                <img src={about} class="mx-auto items-center w-full" />
            </div>
            <div class="hidden md:hidden lg:inline">
                <img src={activity} class="mx-auto w-full" />
            </div>
        </div>
    );
}

export default About;