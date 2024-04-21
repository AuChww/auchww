// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./info.css";
import About from "./about";
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";
import profile from "../image/profile.jpg";
import Work from "./work";
import Profile from "../pages/profile";
import Blank from "./blank";
import Image1 from "./image1";
import Image2 from "./image2";

const imagePaths = {
    1: profile,
    2: 'path/to/2.jpg',
    // Add more image paths as needed
};

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);
    const imagePath = imagePaths[id] || '';

    return (
        <section>
            {id === 1 ?
                <Profile />
                : null}
            <div class="hidden lg:inline">
                {id === 2 ?
                    <About />
                    : null}
            </div>
            <div class="lg:hidden">
                {id === 2 ?
                    <Image1 />
                    : null}
                {id === 3 ?
                    <Image2 />
                    : null}
                {id === 4 ?
                    <About />
                    : null}
            </div>
        </section>
    );
}

export default function Info() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <div class="lg:hidden">
                {[1, 2, 3, 4].map((image) => (
                    <Image id={image} />
                ))}
            </div>
            <div class="hidden lg:inline">
                {[1, 2].map((image) => (
                    <Image id={image} />
                ))}
            </div>
            <motion.div className="progress" style={{ scaleX }} />
        </>
    );
}
