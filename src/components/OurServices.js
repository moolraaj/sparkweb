import React from 'react'

export default function OurServices(props) {
    return (
        <>
            <div className='services-outer'>
                <div className='services-inner'>
                    <div className='services-conatiner-areas'>

                        {/* --services section heading first starts--*/}
                        <div className="heading-right">
                            <marquee direction="left" scrollamount='30'>
                                <h1 style={{ color: props.theme === 'light' ? '#f24b74' : '#1E7CC0' }}>our services our services</h1>
                            </marquee>
                        </div>
                        {/* --services section heading first ends--*/}


                        {/* --services section heading second starts--*/}
                        <div className="heading-left">
                            <marquee direction="right" scrollamount='10'>
                                <h1 style={{ color: props.theme === 'light' ? '#202021' : '#fff' }}>our services our services</h1>
                            </marquee>
                        </div>
                        {/* --services section heading second ends--*/}


                        <div className='services-conatiner-outer'>
                            <div className="services-conatiner-inner" id='service-inner-contain'>
                                {/*services section first starts*/}

                                <div className='filp-card-first flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-image' style={{ background: props.theme === 'light' ? '#fff' : '#ffffff05', border: props.theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <div className="flip-image">
                                                <img src='my-images/services-img-first.png' />
                                            </div>
                                            <div className='flip-heading'>
                                                <h1 style={{ color: props.theme === 'light' ? '#f24b74' : '#fff' }}>Web programming</h1>
                                            </div>
                                        </div>
                                        <div className='flip-card-content' style={{ background: props.theme === 'light' ? '#f24b7400' : '#ffffff05', border: props.theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <p style={{ color: props.theme === 'light' ? '#000' : '#fff' }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                        </div>

                                    </div>
                                </div>

                                {/*services section first ends*/}

                                {/*services section second starts*/}

                                <div className='filp-card-second flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-image' style={{ background: props.theme === 'light' ? '#fff' : '#ffffff05', border: props.theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <div className="flip-image">
                                                <img src='my-images/services-img-second.png' />
                                            </div>
                                            <div className='flip-heading'>
                                                <h1 style={{ color: props.theme === 'light' ? '#f24b74' : '#fff' }}>graphic-design</h1>
                                            </div>
                                        </div>


                                        <div className='flip-card-content' style={{ background: props.theme === 'light' ? '#f24b7400' : '#ffffff05', border: props.theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <p style={{ color: props.theme === 'light' ? '#000' : '#fff' }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                        </div>

                                    </div>
                                </div>

                                {/*services section second ends*/}

                                {/*services section third starts*/}

                                <div className='filp-card-third flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-image' style={{ background: props.theme === 'light' ? '#fff' : '#ffffff05', border: props.theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <div className="flip-image">
                                                <img src='my-images/services-img-third.png' />
                                            </div>
                                            <div className='flip-heading'>
                                                <h1 style={{ color: props.theme === 'light' ? '#f24b74' : '#fff' }}>Ui/ux-design</h1>
                                            </div>
                                        </div>


                                        <div className='flip-card-content' style={{ background: props.theme === 'light' ? '#f24b7400' : '#ffffff05', border: props.theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <p style={{ color: props.theme === 'light' ? '#000' : '#fff' }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                        </div>

                                    </div>
                                </div>

                                {/*services section third ends*/}

                                {/*services section fourth starts*/}

                                <div className='filp-card-fourth flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-image' style={{ background: props.theme === 'light' ? '#fff' : '#ffffff05', border: props.theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <div className="flip-image">
                                                <img src='my-images/services-img-fourth.png' />
                                            </div>
                                            <div className='flip-heading'>
                                                <h1 style={{ color: props.theme === 'light' ? '#f24b74' : '#fff' }}>wordpress</h1>
                                            </div>
                                        </div>


                                        <div className='flip-card-content' style={{ background: props.theme === 'light' ? '#f24b7400' : '#ffffff05', border: props.theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <p style={{ color: props.theme === 'light' ? '#000' : ' #fff' }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                        </div>

                                    </div>
                                </div>

                                {/*services section fourth ends*/}

                                {/*services section fifth starts*/}

                                <div className='filp-card-fifth flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-image' style={{ background: props.theme === 'light' ? '#fff' : '#ffffff05', border: props.theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <div className="flip-image">
                                                <img src='my-images/services-img-fifth.png' />
                                            </div>
                                            <div className='flip-heading'>
                                                <h1 style={{ color: props.theme === 'light' ? '#f24b74' : '#fff' }}>react js</h1>
                                            </div>
                                        </div>

                                        <div className='flip-card-content' style={{ background: props.theme === 'light' ? '#f24b7400' : '#ffffff05', border: props.theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <p style={{ color: props.theme === 'light' ? '#000' : '#fff' }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                        </div>

                                    </div>
                                </div>

                                {/*services section fifth ends*/}

                                {/*services section sixth starts*/}

                                <div className='filp-card-sixth flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-image' style={{ background: props.theme === 'light' ? '#fff' : '#ffffff05', border: props.theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <div className="flip-image">
                                                <img src='my-images/services-img-first.png' />
                                            </div>
                                            <div className='flip-heading'>
                                                <h1 style={{ color: props.theme === 'light' ? '#f24b74' : '#fff' }}>react js</h1>
                                            </div>
                                        </div>

                                        <div className='flip-card-content' style={{ background: props.theme === 'light' ? '#f24b7400' : '#ffffff05', border: props.theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <p style={{ color: props.theme === 'light' ? '#000' : '#fff' }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                        </div>

                                    </div>
                                </div>

                                {/*services section sixth ends*/}


                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}
