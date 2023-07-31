import React from 'react'
import ContactForm from './ContactForm'
  
export default function AboutUs(props) {
    return (
        <>
      
   
  
 

            <div className='about-outer'>
                <div className='about-inner'>
                    <div className='about-flex'>
                        <div className='about-left-section' style={{ color: props.theme === 'dark' ? "#fff" : "#000" }}>
                            <h1 style={{ color: props.theme === 'dark' ? "#1E7CC0" : "#F24B74" }}>about us</h1>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                             used to demonstrate the visual form of a document or a typeface without relying
                              on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                            
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                             used to demonstrate the visual form of a document or a typeface without relying 
                             on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p> 
                             <ContactForm theme={props.theme}/> 
                             
                                                </div>
                        <div className='about-right-section'>
                            <div className="about-first-img">
                                <img src='my-images/frame-second.png' alt="img"/>
                            </div>
                            <div className="about-second-img">
                                <img src='my-images/frame-first.png' alt="img"/>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div> 
         </>
    )
}



