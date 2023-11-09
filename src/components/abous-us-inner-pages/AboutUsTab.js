import React, { useState } from 'react';
import AboutUsWhy from './AboutUsWhy'; 
import Marquee from 'react-fast-marquee';

const AboutUsTab = ({ theme }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
 
  return (
    <div className="about-tab-wraper" style={{ color: theme === 'light' ? '#f24b74' : '#1e7cc0' }}>
      <div className="about-tab-titles">
        <div className='about-ul-wrapper'>
          <ul>
            {AboutUsWhy.map((tab, index) => (
              <li
                className={`about-tab-tab ${activeTab === index ? 'tab-running' : ''}`}
                key={tab.id}
                onClick={() => handleTabClick(index)}
                style={{ color: theme === 'light' ? '#000' : '#fff' ,
          
              
              
              }}
              >
                <div className='tab-images'>
                  <Marquee speed={20} pauseOnHover className='marquee-slides'>
                    <h3 className='tab-heading-three'>{tab.title}</h3>
                  </Marquee>
                  <img
                    src={tab.image} alt=''
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="abut-tab-description" style={{ color: theme === 'light' ? '#000' : '#fff' }}>
        {AboutUsWhy[activeTab] && (
          <>
            <p style={{ color: theme === 'light' ? '#000' : '#000' }}>{AboutUsWhy[activeTab].description}</p>
            <img alt=''
              src={AboutUsWhy[activeTab].image}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AboutUsTab;


// import React, { useState } from 'react';
// import AboutUsWhy from './AboutUsWhy'; 
// import Marquee from 'react-fast-marquee';

// const AboutUsTab = ({ theme }) => {
//   const [activeTab, setActiveTab] = useState(0);  t

//   const handleTabHover = (index) => {
//     setActiveTab(index);
//   };

//   const handleTabLeave = () => {
//     setActiveTab(0);  
//   };

//   return (
//     <div className="about-tab-wraper" style={{ color: theme === 'light' ? '#f24b74' : '#1e7cc0' }}>
//       <div className="about-tab-titles">
//         <div className='about-ul-wrapper'>
//           <ul>
//             {AboutUsWhy.map((tab, index) => (
//               <li
//                 className={`about-tab-tab ${activeTab === index ? 'tab-running' : ''}`}
//                 key={tab.id}
//                 onMouseEnter={() => handleTabHover(index)}
//                 onMouseLeave={handleTabLeave}
//               >
//                 <div className='tab-images'>
//                   <Marquee speed={100} pauseOnHover className='marquee-slides'>
//                     <h3 className='tab-heading-three'>{tab.title}</h3>
//                   </Marquee>
//                   <img
//                     src={tab.image} alt=''
//                     style={{ maxWidth: '100%', height: 'auto' }}
//                   />
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="abut-tab-description" style={{ color: theme === 'light' ? '#000' : '#fff' }}>
//         {AboutUsWhy[activeTab] && (
//           <>
//             <p style={{ color: theme === 'light' ? '#000' : '#000' }}>{AboutUsWhy[activeTab].description}</p>
//             <img alt=''
//               src={AboutUsWhy[activeTab].image}
//             />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AboutUsTab;
