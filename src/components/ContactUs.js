import React from 'react'
import MySong from './MySong'

function ContactUs({img,theme,toggleMode}) {
  return (
    <>
    <div className='btn-outer'>
        <div className='btn-inner'>
          <div className='both-botton'>
            <img src={img} alt='sun&moon' onClick={toggleMode} />
            <MySong theme={theme} />
            

          </div>
        </div>
      </div>
    <h1>welcome to contact us page</h1>
    </>
  )
}

export default ContactUs