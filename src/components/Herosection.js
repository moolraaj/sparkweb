import React, { useState } from 'react'
import WaterWave from 'react-water-wave';


export default function Herosection(props) {

  return (
    <>
      <div className='btn-outer'>
        <div className='btn-inner'>
          <div className='both-botton'>
            <img src={props.img} alt='sun&moon' onClick={props.toggleMode}/>
           
          </div>
        </div>
      </div>
      <WaterWave>
        {methods => (
          <div className='hero-section-outer'>
            <div className='hero-section-inner'>
              <div className="hero-section-first-div">

                <p style={{ color: props.theme === 'dark' ? "#fff" : "#F24B74" }}>loream ipsum</p>

              </div>
              <div className='hero-section-heading'>
                <h1 style={{ color: props.theme === 'dark' ? "#fff" : "#000" }}><span id='welcome-span-text'
                >welcome</span> to<br />sparkweb<br />solutions</h1>

              </div>

            </div>

          </div>)}
      </WaterWave>


    </>
  )
}


