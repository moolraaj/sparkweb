import './components/style.css'
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import AboutUs from './components/AboutUs';
import WhatWeHaveDone from './components/WhatWeHaveDone';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import OurServices from './components/OurServices';
import sun from './components/images/sun.png'
import moon from './components/images/moon.png'
 
 
 
 
    
 
 
 
 
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { Model } from './components/Newdance';
 

 
 
 
 
 
function App() {
   


    
 
   const [theme, setTheme] = useState('light')
   const [img, setImg] = useState(sun)
   

   const toggleMode = () => {
      if (theme === 'light') {
         setTheme('dark');
         document.body.style.background = "#0C073E";
          
         setImg(moon)
         
         
          
      }
      else {
         setTheme('light');
         document.body.style.background = "#fff";
         
         setImg(sun)
        
        
      }

   }
    

  

   return (

      <>
      <div className='app'>
        

      
        
 
         {/* --navbar-section--*/}
         <Navbar  theme={theme} toggleMode={toggleMode} />


         {/* --hero-section--*/}
         {/* <Canvas className="cnavas" camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
         <ambientLight />
      <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
            <OrbitControls/>
            <group position={[0, -1, 0]}>
            <Model/>
            </group>
            <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
         </Canvas> */}
      
         
             




         <Herosection   img={img} theme={theme} toggleMode={toggleMode} />

             
         
          


         {/* --about-us-aection--*/}
         
         <AboutUs   theme={theme} toggleMode={toggleMode} />
         

         {/* --our-services-section--*/}
         <OurServices theme={theme} toggleMode={toggleMode} />


         {/* --what-we-have-done-section--*/}
         <WhatWeHaveDone theme={theme} toggleMode={toggleMode} />


         {/* --testimonials-section--*/}
         <Testimonials theme={theme} toggleMode={toggleMode} />


         {/* --footer-section--*/}
         <Footer theme={theme} toggleMode={toggleMode} /> 
          
         </div>

      </>
   );
}

export default App;
