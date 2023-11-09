import React, { useState } from 'react';
import ServicesContain from './ServicesContain';

const ServicesTab = ({ theme }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabHover = (index) => {
    setActiveTab(index);
  };

  const handleTabLeave = () => {
    setActiveTab(0);
  };

  return (
    <div className="services-tab-wraper" style={{ color: theme === 'light' ? '#f24b74' : '#1e7cc0' }}>
      <div className="services-tab-titles">
        <div className="services-ul-wrapper">
          <ul>
            {ServicesContain.map((tab, index) => (
              <li
                className={`services-tab-tab ${activeTab === index ? 'tab-second-running' : ''}`}
                key={tab.id}
                onMouseEnter={() => handleTabHover(index)}
                onMouseLeave={handleTabLeave}
                style={{backgroundColor: theme === 'light' ? "#F24B74" : "#1e7cc0"}}
              >
                <div className="sitewrapper">
                  <div className="sitetitle">
                    <h2>{tab.siteTitle}</h2>
                  </div>
                  <div className="sitetech">
                    <h2>{tab.siteTechnology}</h2>
                  </div>
                  <div className="sitebuild">
                    <h2>{tab.siteBuildYear}</h2>
                  </div>
                </div>
                {activeTab === index && (
                  <div className="wave-image">
                    <img alt="" src={ServicesContain[index].siteImage} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="services-tab-description" style={{ color: theme === 'light' ? '#000' : '#fff' }}>
        <img alt="" src={ServicesContain[activeTab].siteImage} />
        <p style={{ color: theme === 'light' ? "#000" : "#fff" }} className='site-desc'>{ServicesContain[activeTab].siteDescription}</p>
      </div>
    </div>
  );
};

export default ServicesTab;
