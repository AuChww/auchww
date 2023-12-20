import React from "react";
import { Img } from 'react-image';
import about from "../image/1.jpg";
import activity from "../image/2.jpg";

function Blank() {
    return (
        <div v-if="">
            <div class="hidden md:inline lg:inline">
                <img src={about} class="mx-auto items-center w-full" />
            </div>
        </div>
    );
}

export default Blank;