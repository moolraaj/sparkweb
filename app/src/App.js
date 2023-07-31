 import './App.css';
// import Home from './components/Home';
// import About from './components/About';
// import Services from './components/Services';
// import Navbar from './components/Navbar';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Error404 from './components/Error404';
// import { useState } from 'react';
// import { Office } from './components/Office';
import { OrbitControls, ScrollControls  } from '@react-three/drei'
import {Canvas, useThree} from '@react-three/fiber'
import { Spark } from './components/Spark';
import { Suspense } from 'react';
 
 
function App() { 
  // const [theme, setTheme] = useState('light')

  // const handleChange=(e)=>{
  //   if(theme==='light'){
  //     setTheme(e.target.value)
  //     document.body.style.backgroundColor='#fff'
  //     document.body.style.color='#000'
  //   }else{
  //     setTheme(e.target.value)
  //     document.body.style.backgroundColor='#000'
  //     document.body.style.color='#fff'

  //   }

  // }
   
   

 
  const CameraControls = () => {
    const { camera } = useThree();
    camera.position.set(0, 0, 3); // Set camera position to view the entire model
    camera.lookAt(0, 0, 0);

    return <OrbitControls enableZoom={true} />;
  };
  return (
    <>
    
     
    <div className="App">

 

      {/* <select value={theme} onChange={handleChange}>
        <option value='light' >dark theme</option>
        <option value='dark'>light theme</option>
      </select>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='*' element={<Error404/>}/>
    </Routes>

    
  
   </BrowserRouter> */}
    <Canvas className="canvas">
      <ambientLight intensity={1} />
      <CameraControls />
      <ScrollControls pages={1} damping={0.25} />

      <Suspense fallback={null}>
        <Spark scale={0.5} />
      </Suspense>
    </Canvas>
   
  
     
   
    
   
   
   
    </div>
</>
  );
}

export default App;
