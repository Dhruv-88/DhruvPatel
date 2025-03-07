// Certifications.js

import React from 'react';
import '../styles/AboutMe.css'; // Add your CSS file for styling
import Navbar from './Navbar';
import ProfileImage from '../assets/profileimage.jpeg';
import Certi from '../assets/certifications.png';
import TimeLine from '../assets/Timeline.png';
import TimeLineHor from '../assets/TimelineHor.png';
import PersonalImage1 from '../assets/personalImage_1.png';
import PersonalImage2 from '../assets/personalimage_2.jpg';
import { useNavigate } from 'react-router-dom';
import Investor from '../assets/investor.jpg';
import WebDeveloper from '../assets/webDeveloper.jpg';
import MobileDeveloper from '../assets/mobileDeveloper.jpg';
const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="certifications-container">
        <Navbar/>

        {/* section 1 */}
      <div className="Section1">
        <div className="Section1Left">
           <img src={ProfileImage}/>
        </div>
        <div className="Section1Right">
          <div>
              <h3 className="s1rsubcontainer" >
              From enhancing university systems with AI, to driving business decisions through data analytics and finally developing scalable AI-powered products—has shaped me into a versatile, impact-driven technologist. I am eager to bring this unique blend of AI, data analytics, and full-stack development expertise to workplace, where I can contribute to building intelligent, scalable, and data-driven solutions.              </h3>
          </div>
            
        </div>
      </div>

      {/* section 2 */}

      <div className="Section2">
       
          <div className="Section2RightMobil">
          <img src={TimeLine}/>
              
          </div>


          <div className="Section2Right">
          <img src={TimeLineHor}/>
              
          </div>
      </div>
     
     {/* section 3 */}
      
       <div className="Section3">
        <div className="Section3Heading">
            <h1>Beyond my Expertise in Data Analysis, I'm also...</h1>
        </div>
        <div className="Section3Content">
            <div className="Section3Left">
                  <img src={Investor}/>
                  
                  <h2 >An Investor with more then 60% ROI</h2>
                  
              </div>

            <div className="Section3Right">
              
                    <div className="Section3RightSubWithBorder">
                          <img src={MobileDeveloper}/>
                      
                          <h2>Native Mobile Application Developer </h2>
                    </div>

                    <div className="Section3RightSub">
                          <img src={WebDeveloper}/>
                            
                            <h2>Website Developer</h2>
                    </div>
            </div>

         

        </div>

           <div className="Section3ContentMobileView" >
                    <div className="mobilViewContainer">
                    <img src={Investor}/>
                  
                  <h2 >Investor with more than 60% ROI</h2>
                    </div>

                    <div className="mobilViewContainer">
                    <img src={MobileDeveloper}/>
                      
                      <h2>Native Mobile Application Developer </h2>
                    </div>

                    <div className="mobilViewContainer">
                          <img src={WebDeveloper}/>
                            
                            <h2>Website Developer</h2>
                    </div>
            </div>  
           

           
        </div>

        {/* section 4 */}

        <div className="Section4" >
          
           
           

        </div>

        <div className="section Section6">
        <div class="Subsection1">
          <p onClick={
            ()=>{
              navigate('/projects')
            }
          }>
            My Work
          </p>
          <p onClick={
            ()=>{
              navigate('/')
            }
          }>
            Home
          </p>
        </div>
      </div>
      

    </div>
  );
};

export default AboutMe;
