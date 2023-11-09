import React from 'react'
import MySong from './MySong'
import ServicesTab from './services-inner-pages/ServicesTab'
import './css-files/our-services.css'

  
export default function OurServices({img,theme,toggleMode}) {
    return (
        <>
     
          

           <div className='btn-outer'>
          <div className='btn-inner'>
            <div className='both-botton'>
              <img src={img} alt='sun&moon' onClick={toggleMode} />
              <MySong theme={theme}/>
            </div>
          </div>
        </div>
        


        <div className='hero-section-outer ourservices-section-outer' style={{color:theme==='light'?'#000':'#fff'}}>
        <div className='hero-section-inner'>
          <div className='content-area about-content-area'>
          <h1 className='section-heading about-top-heading' style={{color:theme==='light'?'#F24B74':'#1E7CC0'}}>Our services</h1>
          <p className='section-para about-top-para'>At Sparkweb Solutions, we specialize in creating cutting-edge web and software solutions. Our services encompass website design, custom software development, and digital marketing strategies, all tailored to drive your business forward in the digital age.</p>
 
          </div>


        </div>
      </div>

        <div className='hero-section-outer ourservices-section-outer' style={{color:theme==='light'?'#000':'#fff'}}>
        <div className='hero-section-inner'>
          <div className='content-area about-content-area'>
            <ServicesTab theme={theme} toggleMode={toggleMode}/>





          </div>


        </div>
      </div>


       





       


         
         
           
            
            

        </>
    )
}
