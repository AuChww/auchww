import React from "react";
import { Img } from 'react-image';
import profile from "../image/profile.jpg";

function Home() {
  const myComponent = () => <Img src="https://www.example.com/foo.jpg" />
  return (
    <div className="pagecontainer home">
      <div>
        <img src={profile} />
        <div class="delay-[300ms] duration-[600ms] taos:translate-y-[0px] taos:opacity-0" data-taos-offset="30"></div>
      </div>
    </div>
  );
}

export default Home;
