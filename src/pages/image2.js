import React from "react";
import { Img } from 'react-image';
import about from "../image/2.jpg";

function Image2() {
    const pageMedium = {
        marginTop: '10px', // Adjust the margin to accommodate the fixed navbar
        padding: '20px', // Add padding to the page content
    };
    return (
        <div>
            <div class="sm:hidden mt-20">
                <img src={about} class="mx-auto items-center w-full" />
            </div>
            <div class="hidden sm:inline">
                <img src={about} class="mx-auto items-center w-3/4" />
            </div>
        </div>
    )
}

export default Image2;