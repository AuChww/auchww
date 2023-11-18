import "./project.css";
import { useRef } from "react";
import profile from "../image/profile.jpg";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";

function Work() {
    return (
        <section class="mx-auto">
            <div>
                <img src={profile} alt="" />
            </div>
            <motion class="z-50">
                <div class="md:text-lg text-lg pt-1">
                    JAVA
                </div>
                <div class="border-r-2 border-t-2">
                    <div class="ml-2 font-bold pt-2 pr-1 md:text-3xl text-2xl">
                        Borrowing App
                    </div>
                    <div class="font-semi mb-2 ml-4 mr-2 text-gray-400 md:text-md text-sm">
                        App for borrowing and returning assets in university
                    </div>
                    <div class="inline-flex ml-2 mt-1 font-semi text-lg px-2 border border-white bg-white text-gray-800">
                        <div class="">
                            Java FX
                        </div>
                    </div>
                    <div class="ml-3 inline-flex">
                        <div class="font-semi text-gray-400 md:text-md text-sm">
                            JAN-MAR
                        </div>
                        <div class="font-semi ml-2 text-gray-400 md:text-md text-sm">
                            2023
                        </div>
                    </div>
                    <div class="font-semi mt-1 ml-4 mr-2 text-gray-400 md:text-md text-sm">
                        My Part : Materials Section , UX/UI
                    </div>
                </div>

                <div class="mt-16 md:text-lg text-lg pt-1">
                    Webtech
                </div>
                <div class="border-r-2 border-t-2">
                    <div class="font-bold ml-2 pt-2 pr-1 md:text-3xl text-2xl">
                        Manage Events
                    </div>
                    <div class="font-semi mb-2 ml-4 mr-2 text-gray-400 md:text-md text-sm">
                        A Website for Manage Events in University
                    </div>
                    <div class="inline-flex ml-2 mt-1 font-semi text-lg px-2 border border-white bg-white text-gray-800">
                        <div class="">
                            PHP
                        </div>
                    </div>
                    <div class="inline-flex ml-2 mt-1 font-semi text-lg px-2 border border-white bg-transparent text-white">
                        <div class="">
                            Laravel
                        </div>
                    </div>
                    <div class="inline-flex ml-2 mt-1 font-semi text-lg px-2 border border-white bg-transparent text-white">
                        <div class="">
                            Tailwind
                        </div>
                    </div>
                    <div class="ml-3 inline-flex">
                        <div class="font-semi text-gray-400 md:text-md text-sm">
                            JUN-AUG
                        </div>
                        <div class="font-semi ml-2 text-gray-400 md:text-md text-sm">
                            2023
                        </div>
                    </div>
                    <div class="font-semi mt-1 ml-4 mr-2 text-gray-400 md:text-md text-sm">
                        My Part : UX/UI
                    </div>
                </div>

                <div class="mt-16 md:text-lg text-lg pt-1">
                    WEBTECH
                </div>
                <div class="border-r-2 border-t-2">
                    <div class="font-bold ml-2 pt-2 pr-1 md:text-3xl text-2xl">
                        E-Commerce
                    </div>
                    <div class="font-semi mb-2 ml-4 mr-2 text-gray-400 md:text-md text-sm">
                        A website for Selling Computer equipment
                    </div>
                    <div class="inline-flex ml-2 mt-1 font-semi text-lg px-2 border border-white bg-white text-gray-800">
                        <div class="">
                            JavaScript
                        </div>
                    </div>
                    <div class="inline-flex ml-2 mt-1 font-semi text-lg px-2 border border-white bg-transparent text-white">
                        <div class="">
                            VueJS
                        </div>
                    </div>
                    <div class="inline-flex ml-2 mt-1 font-semi text-lg px-2 border border-white bg-transparent text-white">
                        <div class="">
                            Tailwind
                        </div>
                    </div>
                    <div class="inline-flex ml-2 mt-1 font-semi text-lg px-2 border border-white bg-white text-gray-800">
                        <div class="">
                            PHP
                        </div>
                    </div>
                    <div class="inline-flex ml-2 mt-1 font-semi text-lg px-2 border border-white bg-transparent text-white">
                        <div class="">
                            Laravel
                        </div>
                    </div>
                    <div class="ml-3 inline-flex">
                        <div class="font-semi text-gray-400 md:text-md text-sm">
                            SEP-NOV
                        </div>
                        <div class="font-semi ml-2 text-gray-400 md:text-md text-sm">
                            2023
                        </div>
                    </div>
                    <div class="font-semi mt-1 ml-4 mr-2 text-gray-400 md:text-md text-sm">
                        My Part : All Front-end , Database
                    </div>
                </div>
            </motion>

        </section>
    );
}

export default Work;