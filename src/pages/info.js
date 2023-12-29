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
            <div class="lg:hidden md:hidden">
                {id === 2 ?
                    <Blank />
                    : null}
                {id === 3 ?
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
            {[1, 2].map((image) => (
                <Image id={image} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
        </>
    );
}
