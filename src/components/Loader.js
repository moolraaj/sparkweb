import React from 'react'
import { Audio } from 'react-loader-spinner'
 
 
function Loader() {
  return (
     <>
    <Audio
    	height='90'
      width='20'
      color='#000'
      radius='10'
      loading='false'
    />
      </>
  )
}

export default Loader