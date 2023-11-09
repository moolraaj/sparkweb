import React, { useEffect, useState } from 'react';
import OurTeam from './OurTeam';

function OurTeamProp({ theme }) {
  const [scrollPositions, setScrollPositions] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const positions = OurTeam.map((_, index) => yPos + index * window.innerHeight);
      setScrollPositions(positions);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 
  return (
    <>
      {OurTeam.map((element, index) => (
        <div
          className={`module-our-team-wrapper module-wrapper ${
            window.scrollY <=  scrollPositions[index] ? 'sticky' : ''
          }`}
          key={element.id}
          style={{
            top: index * 100 + 'vh',
            background: theme === 'light' ? "rgb(255 255 255 / 90%)" : 'rgba(12, 7, 62, 0.97)',
            borderBottom: theme === 'light' ? '1px solid rgb(242, 75, 116)' : '1px solid rgb(30, 124, 192)'
          }}
        >
          <div className='module-our-team-inner module-inner' >
            <h2 className='module-our-team-number module-number' style={{ color: theme === 'light' ? 'rgb(242, 75, 116)' : '#1E7CC0' }}>{element.number}</h2>
            <h3 className='module-our-team-headimg module-heading' style={{ color: theme === 'light' ? '#000' : '#fff' }}>{element.title}</h3>
          </div>
          <div className='module-our-team-para section-para' style={{ color: theme === 'light' ? '#000' : '#fff' }}>
            <p >{element.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default OurTeamProp;
