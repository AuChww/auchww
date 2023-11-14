import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="dark:bg-blue-800 p-4 sticky top-0 z-50">
            <div class="hidden lg:flex space-x-4">
                <Link to="/" class="">
                    go home
                </Link>
                <Link to="/project" class="">
                    go project
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;