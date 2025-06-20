// projectsData.js

import FinancialReport from '../assets/SuperMarketAnalysis1.png';
import FinancialReport2 from '../assets/back10.jpg';
import FurnitureRealityPoster from '../assets/furnitureReality_poster.png'


//Dashbord IBM 
import IBM_1 from '../assets/IBM_img1.png';
import IBM_2 from '../assets/IBM_img2.png';
import IBM_3 from '../assets/IBM_img3.png';
import IBM_4 from '../assets/IBM_img4.png';

//project1 images Sales Analytics Dashbord
import p1_1 from '../assets/SuperMarketAnalysis1.png';
import p1_2 from '../assets/SuperMarketAnalysis2.png';
import p1_3 from '../assets/SuperMarketAnalysis3.png';
import p1_4 from '../assets/SuperMarketAnalysis4.png';

//project2 images News BI Dashboard
import NEWS_DASHBOARD_1 from '../assets/NewsDashboard1.png';
import NEWS_DASHBOARD_2 from '../assets/NewsDashboard2.png';
import NEWS_DASHBOARD_3 from '../assets/NewsDashboard3.png';
import NEWS_DASHBOARD_4 from '../assets/NewsDashboard4.png';

//project3 customer churn.
import p3_1 from '../assets/CustomerChurnAnalysis1.jpeg';
import p3_2 from '../assets/CustomerChurnAnalysis2.png';
import p3_3 from '../assets/CustomerChurnAnalysis3.png';
import p3_4 from '../assets/CustomerChurnAnalysis4.png';
import p3_5 from '../assets/CustomerChurnAnalysis5.png';
import p3_6 from '../assets/CustomerChurnAnalysis6.png';

//project4 Health Insurance Premium Analysis.
import p4_1 from '../assets/HealtInsuranceAnalysis1.png';
import p4_2 from '../assets/HealtInsuranceAnalysis2.png';
import p4_3 from '../assets/HealtInsuranceAnalysis3.png';
import p4_4 from '../assets/HealtInsuranceAnalysis4.png';


// project7 Furniture Reality images
import p7_1 from '../assets/pro_7img1.png';
import p7_2 from '../assets/pro_7img2.png';
import p7_3 from '../assets/pro_7img3.png';





const projectsData = [
  {
    id: 1,
    title: 'End-to-End News BI Dashboard',
    description: `This project involves building a Dashboard using Looker Studio for visualizing real-time news data fetched via the News API. The dashboard features automated ETL processes using Google Cloud Functions that run every 12 hours, along with sentiment analysis performed on news articles using pre-trained NLP models to classify content as positive, negative, or neutral which is aim to provide sentiment-based insights, and real-time business intelligence capabilities using Google Cloud  services.`,
    imageSource: NEWS_DASHBOARD_1, // Replace with your actual image variable
    bgColor: '#722F37', // Google Blue color - adjust as needed
    projectImages: [NEWS_DASHBOARD_1, NEWS_DASHBOARD_2, NEWS_DASHBOARD_3, NEWS_DASHBOARD_4], // Replace with your actual image variables
    projectCategory: 'BIproject',
    projectSkills: ['Looker Studio', 'Google Cloud Functions', 'BigQuery', 'ETL', 'Sentiment Analysis', 'API handling', 'NLP', 'Google Cloud Scheduler', 'Data Visualization', 'Real-time Analytics'],
    projectGithubLink: 'https://lookerstudio.google.com/reporting/a2b5dcc8-c710-447f-890d-68267f51d3e2'
  },
    {
      id: 2,
      title: 'Super Market Sales Analysis',
      description: `In today's dynamic retail landscape, data-driven insights are essential for staying competitive and meeting customer demands. This PowerBI dashboard offers a user-friendly interface to explore key metrics and trends within  supermarket, facilitating strategic decision-making.`,
      imageSource: FinancialReport,
      bgColor: '#AC9B8E',
      projectImages:[p1_1,p1_2,p1_3,p1_4],
      projectCategory:'BIproject',
      projectSkills:['Microsoft Power BI','Data Analysis','Data Visualization','DAX','Dashbord','Power Query'],
      projectGithubLink:'https://github.com/Dhruv-88/Super_Market_Sales_Analysis'
    },
    {
      id: 3,
      title: 'IBM Employee Churn Analysis',
      description: `The analytics dashboard designed for IBM focuses on providing targeted insights crucial for optimizing employee retention strategies. Tailored specifically for Human Resources Managers and Senior Executives, this dashboard offers a comprehensive view of factors contributing to employee attrition within the company. Through detailed analyses spanning demographics, such as age, gender, generation, and education, to tenure, past corporate records, and other professional career-related aspects.`,
      imageSource:IBM_1 ,
      bgColor: '#056ca8',
      projectImages:[IBM_1,IBM_2,IBM_3,IBM_4],
      projectCategory:'BIproject',
      projectSkills:['Tableu','Data Analysis','Data Visualization','Data Cleaning'],
      projectGithubLink:'https://github.com/Dhruv-88/HR_Analysis_Report/tree/main'
    },
    
    
    {
        id: 4,
        title: 'Customer Churn Analysis',
        description:'Customer churn remains a critical challenge for businesses in the contemporary landscape, impacting revenue streams and long-term sustainability. In response to this, my project aims to delve into the factors influencing customer churn within the telecommunications industry. By employing statistical analyses and machine learning techniques, I seek to answer key questions surrounding the determinants of churn and provide actionable insights for reducing customer attrition.',
        imageSource: p3_1,
        bgColor: '#3A302E',
        projectCategory:'DAR',
        projectImages:[p3_5,p3_6,p3_2,p3_3,p3_4],
        projectSkills:['R Language','EDA','Data Analysis','Data Visualization','Regression Techniques','Predective Analysis'],
        projectGithubLink:'https://github.com/Dhruv-88/customer-churn-analysis'

      },
      {
        id: 5,
        title: 'Health Insurance Premium Analysis ',
        description: `Healthcare costs are a significant concern for individuals and families worldwide. Understanding the factors influencing insurance premium charges can help insurance companies optimize pricing strategies and assist individuals in making informed decisions about their healthcare coverage. In this project, I aim to delve into the dataset to uncover insights about the relationships between various attributes and insurance charges. Through exploratory data analytics, statistical hypothesis testing, and modeling techniques such as linear regression.`,
        imageSource:p4_4,
        bgColor: '#CFC5B1',
        projectCategory:'DAR',
        projectImages:[p4_1,p4_2,p4_3],
        projectSkills:['Python','EDA','Data Analysis','Data Visualization','Regression Techniques','Predective Analysis'],
        projectGithubLink:'https://github.com/Dhruv-88/customer-churn-analysis'


      },
      {
        id: 6,
        title: 'Project 5',
        description: 'Description for Project 1.',
        imageSource: FinancialReport,
        bgColor: '#7E693E',
        projectCategory:'Excel'
      },
      {
        id: 7,
        title: 'Project 6',
        description: 'Description for Project 2.',
        imageSource: FinancialReport,
        bgColor: '#4D1C13',
        projectCategory:'Excel'
      },
      {
        id: 8,
        title: 'Furniture Reality',
        description: `Furniture Reality is a user-friendly mobile app that utilizes Augmented Reality to bring furniture to life in users' spaces. With a straightforward interface, it allows customers to visualize furniture in their rooms, helping them assess size, scale, and style. Users can customize furniture colors and finishes to match existing decor and preview it in different lighting conditions, minimizing the likelihood of dissatisfaction and returns.`,
        imageSource: FurnitureRealityPoster,
        bgColor: '#626635',
        projectCategory:'APPLICATION',
        projectImages:[p7_1,p7_2,p7_3],
        projectSkills:['ReactNative','React Viro(AR)','Java Script','3D - modeling','CSS','HTML'],
        projectGithubLink:'https://github.com/Dhruv-88/FurnitureReality'

        
      }
     

    // Add more projects as needed
  ];
  
  export default projectsData;
  