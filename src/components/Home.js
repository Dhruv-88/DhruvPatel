import React,{ useRef ,useEffect,useState}  from 'react';
import { motion, useTransform, useScroll } from "framer-motion";
import Navbar from './Navbar';
import '../styles/Home.css'; // Import the CSS file
import Wave from '../assets/back8.jpg'
import { useNavigate } from 'react-router-dom';
import Slider from './Slider.js'
import Google from '../assets/google.svg';
import Microsoft from '../assets/microsoft.svg';
import HackerRank from '../assets/hackerRank.png';
import SplitSection from './SplitSection.js';
import ProjectImage from '../assets/SuperMarketAnalysis1.png';
import ContactForm from './ContactForm';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsPhoneFill } from "react-icons/bs";
import { BsBadgeArFill } from "react-icons/bs";
import { SiAdobeillustrator } from "react-icons/si";
import { BsClipboardDataFill } from "react-icons/bs";


import CLOUDS from 'vanta/src/vanta.clouds';
const App = () => {
  
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
 
  return (

    
    <div>
      
      <Navbar />

      {/* Section 1 */}
      <div className="section section1" >
        <div className="left-part">
            <p>Unlocking Insights From Data,
              <br/>Welcome To My Data Analyst Portfolio.</p>
            
            </div>

            {/* Right Part */}
            <div className="right-part">
              
            </div>
      </div>

      
        
      
       
       

   
      {/* new Section */}
      <div>
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="Feb, 2021 - July, 2021"
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={<BsPhoneFill />  }
    
  >
    <h3 className="vertical-timeline-element-title">Jr. React Native Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">India</h4>
    <p style={{color:'grey'}}>
      As a React Native intern, I honed my skills in developing native applications by working on real-world application.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Jan, 2023 - May, 2023"
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={<BsBadgeArFill />}
   
  
  >
    <h3 className="vertical-timeline-element-title">Bachlor's Final Year Project</h3>
    <h4 className="vertical-timeline-element-subtitle">Furniture Reality</h4>
    <p style={{color:'grey'}} >
     I developed a native mobile application showcasing Augmented Reality technology tailored specifically for the furniture industry.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Jan, 2024 - Current"
    iconStyle={{background: 'black', color: '#fff'  }}
    icon={<SiAdobeillustrator />  }
    
  >
    <h3 className="vertical-timeline-element-title">Northeastern AI Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">Stundent Assistant</h4>
    <p style={{color:'grey'}}>
    I collaborated with a professor to develop a cutting-edge chatbot utilizing  RAG (Retrieval-Augmented Generation) technology, integrating openAI and langchain capabilities.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="March, 2024 - Current"
    iconStyle={{ background: 'black', color: '#fff'}}
    icon={<BsClipboardDataFill />  }
    
  >
    <h3 className="vertical-timeline-element-title">Data Analyst</h3>
    <h4 className="vertical-timeline-element-subtitle">Gamut Canada,Toronto</h4>
    <p style={{color:'grey'}}>
     In my current role, I'm crafting a PowerBI dashboard for comprehensive analysis of sales, finances, inventory, and customer data.
    </p>
  </VerticalTimelineElement>
  
  
</VerticalTimeline>
      </div>

      {/* Section 2 */}
    
      <div className="section section2">
        
          <h1>
            I excel in crafting powerful analytics projects, business intelligence dashboards, and insightful data  reports.
          </h1>
       
        
       

        
          <button onClick={
            ()=>navigate('/projects')
          }>
            Explore Projects
          </button>
        
      </div>

      <div>
         
      </div>
       <div>
        
       </div>
      {/* Section 3 */}
      
      {/* <div className="section section3">
        <Slider/>
      </div>
      */}

      <div className="section section3">
        <div className="subsection1">
          <h1 style={{color:'White',alignSelf:'Center'}}>
            Featured Work
            </h1>
        </div>
        <div>
          <img src={ProjectImage} alt="ProjectImage"/>
        </div>
        <div className="subsection2">
          <h2 >Interactive business intellegent dashbord for super market salesdata <br/>
          to analyse key metrics, company performance and sales.</h2>
          <button 
          onClick={
            ()=>navigate('/IndevidualProject/1')
          }
          className="ViewDashbordButton">View Dashbord</button>
        </div>

      </div>
      
    
    
      {/* Section 4 */}
      <div className="section section4">
          <p>I'm Certified With ...</p>
          <div className="Certifications">
             <div className="CertiSubContainer">
                 <img src={Google}/>
                 <h2>Google Data Analyst.</h2>
             </div>

             <div className="CertiSubContainer">
                 <img src={Microsoft}/>
                 <h2>Microsoft Data Analyst Associate.</h2>
             </div>

             <div className="CertiSubContainer">
                 <img src={HackerRank}/>
                 <h2>Hacker Rank SQL 5 Start Badge.</h2>
             </div>
          </div>
      </div>

      {/* Section 5 */}
      <div className="section section5">
       
       <p>I'd Love to work With You</p>

       <button  onClick={
        ()=>{
          window.location.href = 'https://www.linkedin.com/in/dhruv-patel30/';
        }
       }>
        Let's Connect 
       </button>

      
      </div>

      {/* Section 6  */}
      <div className="section Section6">
        <div class="Subsection1" >
          <p 
           
          onClick={
            ()=>navigate('/projects')
          }>
            My Work 
          </p>
          <p onClick={
            ()=>navigate('/AboutMe')
          }>
            About Me
          </p>
        </div>
      </div>
    </div>
   
   
  
  );
};



export default App;

