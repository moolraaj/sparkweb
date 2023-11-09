 import React, { useEffect, useState } from 'react'
import {TestDemoFirst,TestDemoSecond} from './TestDemo'
 
 function Test() {
  const [scrolling, setScrolling] = useState([])
  const [tab, setTab] = useState(0)



  const clickHandler=(index)=>{
    setTab(index)
  }

  useEffect(()=>{
    const scrollHandler=()=>{
      let posY=window.scrollY
      let positions=TestDemoFirst.map((_,index)=> posY + index * window.innerHeight)
      setScrolling(positions)
    }

    window.addEventListener('scroll',scrollHandler)
    return()=>{
      window.removeEventListener('scroll',scrollHandler)

    }

  },[])



 
   return (
      <>
      {
        TestDemoFirst.map((items,index)=>{
          return <div className={`main-outer-deiv ${window.screenY <= scrolling[index]?'sticky':''}`}
          style={{top:index * 100 +' vh'}}
          >
          <div className='test-left-div'>
            <h1>{items.id}</h1>
            <h3>{items.title}</h3>
          </div>
          <div className='test-right-div'>
           <p>{items.description}</p>
          </div>
        </div>
          
          

        })
      }

      {
        
         
          
          <div className='wrapper'>
          <div className='outer-ul'>
          <ul>
          {TestDemoSecond.map((items,index)=>{
            return <li  key={items.id} className={`my-list ${tab===index?'active':''}`}
            onClick={()=>clickHandler(index)}
            
            >
               
                 {items.title} 
                
                </li>
                })}
            
          </ul>
          </div>

           <div className='description'>
             {TestDemoSecond[tab] && (
              <>
              <p>{TestDemoSecond[tab].description}</p>
              </>

             )}
           
           </div>
           </div>
            
          
          
         


        
      }

      
      
      </>
   )
 }
 
 export default Test