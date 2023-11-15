import "./info.css";
import { useRef } from "react";
import profile from "../image/profile.jpg";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";

function Profile() {
    return (
        <section class="mx-auto">
            <motion.h2 >
                <div class="font-bold border-r-2 border-t-2 pr-1 md:text-9xl text-7xl">
                    AU
                </div>
                <div class="md:inline-flex ml-2 font-semi text-lg px-2 border border-white bg-white text-gray-800">
                    <div class="">
                        Chanawut
                    </div>
                    <div class="md:ml-1">
                        Wuttinun
                    </div>
                </div>
            </motion.h2>
        </section>
    );
}

export default Profile;