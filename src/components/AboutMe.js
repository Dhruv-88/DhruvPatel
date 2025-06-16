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
import Cycling from '../assets/cycle.png';
import Hiking from '../assets/hiking.png';
import Finance from '../assets/finance.png'
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
              From developing AI-powered query expansion systems and automated content generation platforms, to leading data-driven healthcare research initiatives and building predictive models for inventory optimization—my journey has shaped me into a versatile, results-oriented data professional. I am eager to contribute in building intelligent, scalable, and data-driven solutions that deliver business impact.  
              </h3>
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
                  <img src={Finance}/>
                  
                  <h2 >Economics and finance enthusiast </h2>
                  
              </div>

            <div className="Section3Right">
              
                    <div className="Section3RightSubWithBorder">
                          <img src={Cycling}/>
                      
                          <h2>Cycling aficionado </h2>
                    </div>

                    <div className="Section3RightSub">
                          <img src={Hiking}/>
                            
                            <h2>Nature-loving trail hiker</h2>
                    </div>
            </div>

         

        </div>

           <div className="Section3ContentMobileView" >
                    <div className="mobilViewContainer">
                    <img src={Finance}/>
                  
                  <h2 >Investor with more than 60% ROI</h2>
                    </div>

                    <div className="mobilViewContainer">
                    <img src={Cycling}/>
                      
                      <h2>Cycling aficionado  </h2>
                    </div>

                    <div className="mobilViewContainer">
                          <img src={Hiking}/>
                            
                            <h2>Nature-loving trail hiker</h2>
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
