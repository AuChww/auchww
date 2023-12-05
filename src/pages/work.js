
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
        <section class="mx-auto grid grid-cols-2">
            <div class="bg-white rounded-xl my-8 text-black">
                <div class="ml-4 ">
                    <div class="text-black text-2xl text-semibold mt-4">Skills</div>
                    <div class="flex justify-center w-40 mx-auto">
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png'} class="w-10 h-10" alt="Vue Logo" />
                        <div>Vue</div>
                    </div>
                    <div class="flex border border-black justify-center w-40 mx-auto">
                        <img src={'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png'} class="w-10 h-10"></img>
                        <div>React</div>
                    </div>
                    <div>Laravel</div>
                    <div>CSS</div>
                    <div>C/C++</div>
                    <div>Python</div>
                    <div>SQL</div>
                </div>
            </div>
            <div class="bg-white rounded-xl my-8">
                <div class="text-black text-2xl text-semibold ml-4 mt-2">Project</div>
            </div>
        </section>
    );
}

export default Work;