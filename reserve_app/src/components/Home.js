import React, { useState } from 'react';
import './Home.css';

export default function Home(props) {

  return(
    <div className="home-wrapper">
      <div id="heroText">
        <h1 id="mainName">ReserveMe</h1>
        <p id="sloganMain">You don't need to wait, skip the line.</p>
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