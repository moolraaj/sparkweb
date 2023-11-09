import './App.css';
import React, { useRef, useEffect } from 'react';


import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Error404 from './components/Error404';
import { useState } from 'react';
import Mysong from './components/Mysong';

// import { Office } from './components/Office';
// import { OrbitControls, ScrollControls  } from '@react-three/drei'
// import {Canvas, useThree} from '@react-three/fiber'
// import { Spark } from './components/Spark';
// import { Suspense } from 'react';

import sun from '../src/components/images/sun.png'
import moon from '../src/components/images/moon.png'
import Test from './components/Test';
 
import CircleA from './components/CircleA';





function App() {
  const [theme, setTheme] = useState('light')


  const [img, setImg] = useState(sun)

  const lighttheme = (e) => {
    e.preventDefault()
    if (theme !== 'light') {
      setTheme('light');
      setImg(sun)
      document.body.style.backgroundColor = '#fff';
    }
  };

  const darktheme = (e) => {
    e.preventDefault()
    if (theme !== 'dark') {
      setTheme('dark');
      setImg(moon)
      document.body.style.backgroundColor = '#000';
    }
  };

  const circleRefs = useRef([]);
  
  // reset on re-renders
  circleRefs.current = [];
  
  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    circleRefs.current.forEach(ref => ref.moveTo(innerWidth / 2, innerHeight / 2));
    
    const onMove = ({ clientX, clientY }) => {      
      circleRefs.current.forEach(ref => ref.moveTo(clientX, clientY));
    };
    
    window.addEventListener("pointermove", onMove);
    
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  
  const addCircleRef = ref => {
    if (ref) {
      circleRefs.current.push(ref);
    }    
  };


 






  // const CameraControls = () => {
  //   const { camera } = useThree();
  //   camera.position.set(0, 0, 3); // Set camera position to view the entire model
  //   camera.lookAt(0, 0, 0);

  //   return <OrbitControls enableZoom={true} />;
  // };

  return (
    <>


      <div className="App">

        <div className={`dropdown`}>
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
            {theme === 'light' ? <img src={sun} alt='' /> : <img src={moon} alt='' />}
          </button>
          <ul className="dropdown-menu">


            <li><a className="dropdown-item" href='/' onClick={darktheme}>{theme === 'dark' ? <img src={moon} alt='' /> : <img src={moon} alt='' />}</a></li>
            <li><a className="dropdown-item" href='/' onClick={lighttheme}>{theme === 'light' ? <img src={sun} alt='' /> : <img src={sun} alt='' />}</a></li>
          </ul>
        </div>



        {/* <select value={theme} onChange={handleChange}>
        <option value='light' >dark theme</option>
        <option value='dark'>light theme</option>
      </select> */}

        <Navbar />
        <Routes>
          <Route path='/' element={<Home img={img} />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/my-song' element={<Mysong />} />

          {/* {TestDemo.map((e)=>{
             return <Route key={e.id} path='/test' element={
              <div className='container my-4'>
                <div className='row'>
                  <div className='col-md-4'>
                  <Test name={e.name} id={e.id} email={e.email} address={e.address} contact={e.contact} />
                  </div>
                </div>
              </div>
             
            } />
            })
            
            } */}


         
          <Route path='/test' element={<Test />} />
          <Route path='*' element={<Error404 />} />


        </Routes>




















        {/* <Canvas className="canvas">
      <ambientLight intensity={1} />
      <CameraControls />
      <ScrollControls pages={1} damping={0.25} />

      <Suspense fallback={null}>
        <Spark scale={0.5} />
      </Suspense>
    </Canvas>
    */}

        <CircleA size="sm" ref={addCircleRef} delay={0} />
        <CircleA size="md" ref={addCircleRef} delay={0.1} />
        <CircleA size="lg" ref={addCircleRef} delay={0.2} />










      </div>

    </>
  );
}

export default App;
