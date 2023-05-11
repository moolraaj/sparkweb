import React from 'react'

export default function WhatWeHaveDone(props) {
    return (
        <>

            <div className="what-we-have-done">
                <div className="services-inner">

                    {/* --services section heading first starts--*/}
                    <div className="heading-right">
                        <marquee direction="left" scrollamount='30'>
                            <h1 style={{ color: props.theme === 'light' ? '#f24b74' : '#1E7CC0' }}>what we have done</h1>
                        </marquee>
                    </div>
                    {/* --services section heading first ends--*/}


                    {/* --services section heading second starts--*/}
                    <div className="heading-left">
                        <marquee direction="right" scrollamount='10'>
                            <h1 style={{ color: props.theme === 'light' ? '#202021' : '#fff' }}>what we have done</h1>
                        </marquee>
                    </div>
                    {/* --services section heading second ends--*/}

                    <div className='services-conatiner-outer'>
                        <div className="services-conatiner-inner">
                            {/* --services section first--*/}
                            <div className='services-first services-section' style={{ background: props.theme === 'light' ? '#f24b74' : '#1E7CC0' }}>
                                <div className="site-name service-info">
                                    <a href="#">hopingminds.com</a>
                                </div>
                                <div className="site-admin-name service-info">
                                    <h2>mr chinedu</h2>
                                </div>
                                <div className="site-publish service-info">
                                    <p>sep 2021</p>
                                </div>
                            </div>
                            {/* --services section first ends--*/}


                            {/* --services section second starts--*/}
                            <div className='services-second services-section' style={{ background: props.theme === 'light' ? '#f24b74' : '#1E7CC0' }}>
                                <div className="site-name service-info">
                                    <a href="#">hopingminds.com</a>
                                </div>
                                <div className="site-admin-name service-info">
                                    <h2>mr chinedu</h2>
                                </div>
                                <div className="site-publish service-info">
                                    <p>sep 2021</p>
                                </div>
                            </div>
                            {/* --services section second ends--*/}


                            {/* --services section third starts--*/}
                            <div className='services-second services-section' style={{ background: props.theme === 'light' ? '#f24b74' : '#1E7CC0' }}>
                                <div className="site-name service-info">
                                    <a href="#">hopingminds.com</a>
                                </div>
                                <div className="site-admin-name service-info">
                                    <h2>mr chinedu</h2>
                                </div>
                                <div className="site-publish service-info">
                                    <p>sep 2021</p>
                                </div>
                            </div>
                            {/* --services section third ends--*/}


                            {/* --services section fourth starts--*/}
                            <div className='services-second services-section' style={{ background: props.theme === 'light' ? '#f24b74' : '#1E7CC0' }}>
                                <div className="site-name service-info">
                                    <a href="#">hopingminds.com</a>
                                </div>
                                <div className="site-admin-name service-info">
                                    <h2>mr chinedu</h2>
                                </div>
                                <div className="site-publish service-info">
                                    <p>sep 2021</p>
                                </div>
                            </div>
                            {/* --services section fourth ends--*/}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
