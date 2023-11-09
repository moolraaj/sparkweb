import React from 'react'
import MySong from './MySong'
import AboutUsTab from './abous-us-inner-pages/AboutUsTab'
import Marquee from 'react-fast-marquee'
import './css-files/about-us.css'
import OurTeamProp from './abous-us-inner-pages/OurTeamProp'

function AboutUs({ img, theme, toggleMode }) {
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


      <div className='hero-section-outer' style={{color:theme==='light'?'#000':'#fff'}}>
        <div className='hero-section-inner'>
          <div className='content-area about-content-area'>
          <h1 className='section-heading about-top-heading' style={{color:theme==='light'?'#F24B74':'#1E7CC0'}}>Our Story</h1>
          <p className='section-para about-top-para'>The story of SparkWebSolutionJ is one of vision, passion, and determination. It all began with a small group of tech enthusiasts who believed that the digital world held immense potential for businesses, both large and small. Fueled by a desire to make a difference, they embarked on a journey to create a company that would empower others to succeed in the ever-evolving digital landscape.</p>
             <Marquee pauseOnHover play speed={10}>
              <h4 className='section-heading about-top-heading-four'>Welcome to SparkWebSolution - Your Partner in Digital Excellence!</h4>
            </Marquee>
            <p className='section-para about-top-para'>At SparkWebSolution, we are passionate about transforming businesses through cutting-edge digital solutions. As a leading technology partner, we specialize in crafting innovative web and mobile experiences that empower businesses to thrive in the digital age. Our mission is to ignite your online presence, spark growth, and illuminate new possibilities in the ever-evolving digital landscape.</p>
          </div>


        </div>
      </div>


      <div className='about-outer about-our-team'>
        <div className='about-inner'>
          <div className='content-area about-content-area'>
            <h1 className='section-heading about-top-greet' style={{color:theme==='light'?'#F24B74':'#1E7CC0'}}>What Sets Us Apart</h1>
          </div>
          <AboutUsTab theme={theme}/>
        </div>
      </div>






      <div className='about-outer about-our-team'>
        <div className='about-inner'>
          <div className='content-area about-content-area'>
            <h1 className='section-heading about-top-greet' style={{color:theme==='light'?'#F24B74':'#1E7CC0'}}>Our Team</h1>
            <p className='section-para about-top-para' style={{color:theme==='light'?'#000':'#fff'}}>At SparkWebSolutionJ, our team is composed of dedicated individuals who are passionate about innovation, design, and technology. We take pride in our diverse backgrounds and expertise, which allow us to approach projects from various angles and create comprehensive solutions. our team is our biggest asset. We are a group of dedicated professionals who are passionate about what we do. Here's a glimpse into our talented team:</p>
          </div>
        </div>
      </div>


      <div className='about-outer about-out-team-prop'>
        <div className='about-inner'>
          <OurTeamProp  theme={theme}/>
        </div>
      </div>


      <div className='about-outer about-join-our-journey'>
        <div className='about-inner'>
          <div className='content-area about-content-area'>
            <h1 className='section-heading about-top-greet' style={{color:theme==='light'?'#F24B74':'#1E7CC0'}}>Join Our Journey</h1>
            <p className='section-para about-top-para' style={{color:theme==='light'?'#000':'#fff'}}>For established enterprises, the journey is one of continuous evolution. Staying ahead in today's dynamic business environment requires embracing change and harnessing the potential of cutting-edge technologies. We're here to be your partners in this journey, collaborating to develop solutions that optimize your operations, enhance customer experiences, and drive sustainable growth. Let's explore uncharted territories and reshape your industry's landscape.</p>
          </div>
        </div>
      </div>














    </>
  )
}

export default AboutUs