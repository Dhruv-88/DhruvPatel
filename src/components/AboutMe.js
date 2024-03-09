// Certifications.js

import React from 'react';
import '../styles/AboutMe.css'; // Add your CSS file for styling
import Navbar from './Navbar';
import ProfileImage from '../assets/profileimage.jpeg';
import Certi from '../assets/certifications.png';
import TimeLine from '../assets/Timeline.png';
import PersonalImage1 from '../assets/personalImage_1.png';
import PersonalImage2 from '../assets/personalimage_2.jpg';
import { useNavigate } from 'react-router-dom';

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
                Hello, I'm Dhruv Data Analyst with a passion for the finance world. I'm Eager to leverage my data analytics skills to drive insights and informed decisions. Committed to continuous learning, I'm dedicated to staying at the forefront of new data analytics concepts and financial movements in the world .
              </h3>
          </div>
            
        </div>
      </div>

      {/* section 2 */}

      <div className="Section2">
        <div className="Section2Left">
            <div>
                <h3 className="s1rsubcontainer" >
                   As a graduate student at Northeastern University in Toronto, I am actively engaged in deepening my understanding of industry practices and refining my skill set while embracing the vibrant cultural tapestry and hospitality of Canada. Possessing a Bachelor's degree in Computer Science Engineering, I proudly earned a GPA of 9.7, reflecting my dedication to academic excellence. Currently pursuing my Master's degree with a GPA of 3.89, I am committed to continuous learning and contributing meaningfully to advancements in my field.
                </h3>
            </div>
          </div>
          <div className="Section2Right">
          <img src={TimeLine}/>
              
          </div>
      </div>
     
     {/* section 3 */}
      
       <div className="Section3">
          <div className="s3rsubcontainer" >
              <h3>
              With a robust skill set tailored for a Data Analyst role, I recently attained the Microsoft PL-300 (Power BI Certification), showcasing my advanced proficiency in utilizing business intelligence tools and methodologies. Moreover, as a Google Certified Data Analyst, I have demonstrated mastery in essential data analysis principles.

              <br/><br/> In addition to my technical acumen, my proactive involvement in investment activities has yielded remarkable results, achieving a notable 60% return on investment over a three-year span. Furthermore, my expertise extends to native mobile development using React Native, as well as web application development utilizing React and JavaScript. I have effectively applied these skills through active participation in industry projects and freelance endeavors.
              </h3>
          </div>
        </div>

        {/* section 4 */}

        <div className="Section4" >
          
           <h3>
            I love hiking, exploring nature and sunshine ...
           </h3>
         
           

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
