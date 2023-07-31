import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Testimonials(props) {
    
    return (
        <div className="testimonial-outer">
            <div className="testimonial-inner">

                {/* --testimolials heading first starts--*/}
                <div className="heading-right">
                <Marquee play pauseOnHover speed={20} >
                         <h1 style={{ color: props.theme === 'light' ? '#f24b74' : '#1E7CC0' }}>testimonials testimonials</h1>
                         </Marquee>
                 </div>
                {/* --testimolials heading first ends--*/}


                {/* --testimolials heading second starts--*/}
                <div className="heading-left">
                <Marquee play pauseOnHover    direction='right' speed={60} gradientWidth={10}>
                         <h1 style={{ color: props.theme === 'light' ? '#202021' : '#fff' }}>testimonials testimonials</h1>
                         </Marquee>
                 </div>
                {/* --testimolials heading second ends--*/}


                <div className="tetimonial-full-section">
                    <div className='testimonial-container'>

                        {/* --testimonial first starts-- */}
                        <div className="testimonial-first  testimonila-section">
                            <div className="testimonial-img-text">
                                <div className="test-img">
                                    <img src="my-images/testimonials-first.png" alt="img"/>
                                </div>
                                <div className="test-text">
                                    <div className="testi-para" style={{color:props.theme==='light'?"#202021":"#fff"}}>
                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                    </div>
                                    <div className="testi-starts">
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img" />
                                        </div>
                                        <div className="starts">
                                        <img src="my-images/star-rating.png" alt="img" />
                                        </div>
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img"/>
                                        </div>
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img"/>
                                        </div>
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img"/>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div className='second-testi-text'>
                                <div className='left-testi-text testi-text'>
                                    <h2 style={{color:props.theme==='light'?"#F24B74":"#1E7CC0"}}>mr cinedu</h2>
                                </div>
                                <div className='left-testi-text testi-text'>
                                    <a href='/' style={{color:props.theme==='light'?"#202021":"#fff"}}>hopingminds.com</a>
                                </div>
                            </div>
                        </div>
                        {/* --testimonial first ends-- */}


                        {/* --testimonial second starts-- */}
                        <div className="testimonial-second  testimonila-section">
                            <div className="testimonial-img-text">
                                <div className="test-img">
                                    <img src="my-images/testimonials-second.png" alt="img"/>
                                </div>
                                <div className="test-text">
                                    <div className='testi-para' style={{color:props.theme==='light'?"#202021":"#fff"}}>
                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                    </div>
                                    <div className="testi-starts">
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img"/>
                                        </div>
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img"/>
                                        </div>
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img"/>
                                        </div>
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img"/>
                                        </div>
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img"/>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div className='second-testi-text'>
                                <div className='left-testi-text testi-text'>
                                    <h2 style={{color:props.theme==='light'?"#F24B74":"#1E7CC0"}}>mr cinedu</h2>
                                </div>
                                <div className='left-testi-text testi-text'>
                                    <a href='/' style={{color:props.theme==='light'?"#202021":"#fff"}}>hopingminds.com</a>
                                </div>
                            </div>
                        </div>
                        {/* --testimonial second ends-- */}


                        {/* --testimonial third stsrts-- */}
                        <div className="testimonial-third testimonila-section">
                            <div className="testimonial-img-text">
                                <div className="test-img">
                                    <img src="my-images/testimonials-third.png" alt="img"/>
                                </div>
                                <div className="test-text">
                                    <div className='testi-para' style={{color:props.theme==='light'?"#202021":"#fff"}}>
                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                        <div className="testi-starts">
                                            <div className="starts">
                                                <img src="my-images/star-rating.png" alt="img"/>
                                            </div>
                                            <div className="starts">
                                                <img src="my-images/star-rating.png"alt="img" />
                                            </div>
                                            <div className="starts">
                                                <img src="my-images/star-rating.png" alt="img"/>
                                            </div>
                                            <div className="starts">
                                                <img src="my-images/star-rating.png" alt="img"/>
                                            </div>
                                            <div className="starts">
                                                <img src="my-images/star-rating.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className='second-testi-text'>
                                <div className='left-testi-text testi-text'>
                                    <h2 style={{color:props.theme==='light'?"#F24B74":"#1E7CC0"}}>mr cinedu</h2>
                                </div>
                                <div className='left-testi-text testi-text'>
                                    <a href='/' style={{color:props.theme==='light'?"#202021":"#fff"}}>hopingminds.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --testimonial third starts-- */}


            </div>
        </div>
    )
}
