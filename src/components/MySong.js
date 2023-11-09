import React, { useState } from 'react';
import useSound from 'use-sound';
import boopSfx from './songs/relax-meditate-yoga-159727.mp3';
 import { Bars } from 'react-loader-spinner'
 

const MySong = ({theme}) => {
  
  const loaderTrue=<Bars
  height='70'
  width='30'
  color={theme === 'light' ? '#f24b74' : '#fff'}
  radius='10'
 
  
   
/>
 
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause }] = useSound(boopSfx, { volume: 1, onend: () => setIsPlaying(false) });

  const handlePlayPause = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className='play-song' id='button-play'>

      
      <button onClick={handlePlayPause}>
        {isPlaying ? loaderTrue : loaderTrue}
      </button>
    </div>
  );
};

export default MySong;
