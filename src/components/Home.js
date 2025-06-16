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
import { BsArchiveFill } from "react-icons/bs";
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
            <p>I'm Versatile, Impact-Driven Technologist,
              <br/>Welcome To My Portfolio.</p>
            
            </div>

            {/* Right Part */}
            <div className="right-part">
              
            </div>
      </div>

      
        
      
       
       

   
      {/* new Section */}
      <div style={{width:'99vw'}}>
      <VerticalTimeline>

    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
    iconStyle={{ background: 'black', color: '#fff'}}
    icon={<SiAdobeillustrator />  }
    
  >
    <h3 className="vertical-timeline-element-title"> Machine Learning & Full Stack Engineer </h3>
    
    <h4 className="vertical-timeline-element-subtitle">July 2024 - Feb -2025</h4>

    <h4 className="vertical-timeline-element-subtitle">Publicus.ai</h4>
    <p style={{color:'grey'}}>
    Engineered LLM query expansion systems with 20% improved search relevance and built AI agent for automated social media content creation.
    Developed scalable full-stack architecture with CI/CD pipeline, reducing development time by 30%.    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
    iconStyle={{background: 'black', color: '#fff'  }}
    icon={<BsArchiveFill />  }
    
  >
    <h3 className="vertical-timeline-element-title"> Data Analyst</h3>
    <h4 className="vertical-timeline-element-subtitle"> Jan 2025 - March 2025</h4>
    <h4 className="vertical-timeline-element-subtitle"> CAMH, Toronto</h4>
    <p style={{color:'grey'}}>
    Led 3-member team to design and develop Tableau dashboard for healthcare wearable device data quality assessment with smart alert functionality.     </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
    iconStyle={{ background: 'black', color: '#fff'}}
    icon={<BsClipboardDataFill />  }
    
  >
    <h3 className="vertical-timeline-element-title">Data Analyst</h3>
    
    <h4 className="vertical-timeline-element-subtitle">March 2024 - May 2024</h4>

    <h4 className="vertical-timeline-element-subtitle">Gamut Canada, Toronto</h4>
    <p style={{color:'grey'}}>
    Implemented forecasting model predicting shelf life for 300+ products using 24-month sales data and developed interactive Power BI dashboards, optimizing inventory management while providing comprehensive insights into company performance and customer patterns.    </p>
  </VerticalTimelineElement>


  
  
</VerticalTimeline>
      </div>

      {/* Section 2 */}
    
      <div className="section section2">
        
          <h1>
            Passionate About Leveraging ML, Data Science and Business Intelligence to Transform Data into Strategic Business Solutions 
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
          <h2 >Interactive business intellegent dashboard for super market sales data <br/>
          to analyse key metrics, company performance and sales.</h2>
          <button 
          onClick={
            ()=>navigate('/IndevidualProject/1')
          }
          className="ViewDashbordButton">View Dashboard</button>
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
                 <h2>Hacker Rank SQL 5 Star Badge.</h2>
             </div>
          </div>
      </div>

      {/* Section 5 */}
      <div className="section section5">
       
       <p>I'd Love to Work With You</p>

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

