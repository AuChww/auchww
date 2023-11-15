// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./info.css";
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
            {id === 2 ?
                <Work />
                : null}
            {id === 3 ?
                <Work />
                : null}
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
            {[1, 2, 3].map((image) => (
                <Image id={image} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
        </>
    );
}
