import React from "react";
import { Img } from 'react-image';
import about from "../image/2.jpg";

function Image2() {
    const pageMedium = {
        marginTop: '10px', // Adjust the margin to accommodate the fixed navbar
        padding: '20px', // Add padding to the page content
    };
    return (
        <div class="">
            <img src={about} class="mx-auto items-center w-full" />
        </div>
    )
}

export default Image2;