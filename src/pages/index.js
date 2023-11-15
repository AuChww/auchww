import React from "react";
import { Img } from 'react-image';
import profile from "../image/profile.jpg";

function Home() {
  const pageMedium = {
    marginTop: '-120px', // Adjust the margin to accommodate the fixed navbar
    padding: '0px', // Add padding to the page content
  };
  const myComponent = () => <Img src="https://www.example.com/foo.jpg" />
  return (
    <div className="pagecontainer home" style={pageMedium}>
      <div >
        <img src={profile} class="mx-auto" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%', // Set width to 100% for proportional scaling
          height: '100%',
          objectFit: 'cover',
        }} />
      </div>
    </div>
  );
}

export default Home;
