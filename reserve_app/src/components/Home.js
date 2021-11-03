import React, { useState } from 'react';
import './Home.css';

export default function Home(props) {

  return(
    <div className="home-wrapper">
      <div id="heroText">
        <h1 id="mainName"><span className='primaryColorBG'>Reserve</span><span className='secondaryColorBG'>Me!</span></h1>
        <p className="sloganMain"><span className='primaryColor'>You don't need to wait,</span><span className='secondaryColor'> skip the line.</span></p>
        <div className="featuredbttns">
            <a className="btn" href="/stores">Your Favourite Stores </a>
        </div>
      </div>
      <div id="emptyBlock">

      </div>
        
    </div>
  )
}

Home.propTypes = {
 
};