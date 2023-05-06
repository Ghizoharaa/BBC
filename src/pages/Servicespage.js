import React from "react";
import './style.css';
import { useTheme } from "../hook/useTheme";

function Servicespage() {
  const {theme}=useTheme()
  console.log(theme);
  return (
    <>
    <div className="service component__space" >
      <div  >
        <h1 className={theme=="dark" ? "heading darkMode":" heading lightMode"} >Expert Guidance for Business Strategy, Training, and Development</h1>
       
      </div>

      <div className="container app ">
        {/* <div className="row"> */}


         
            <div  className={theme=="dark" ? "service__box shadowDark":" service__box shadowLight"} >
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1  className={theme=="dark" ? "service__text darkMode":" service__text lightMode"}>Professional Training Services</h1>
                <p   className={theme=="dark" ? "service__text p  p__color darkMode":" service__text p p__color lightMode"} >
                We provide customized training programs that are tailored to the specific needs of our clients. Our team of experienced professionals works closely with clients to understand their unique requirements and develop a training program that meets their needs.
                </p>
                
              </div>
            </div>
            <div   className={theme=="dark" ? "service__box shadowDark":" service__box shadowLight"}>
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1  className={theme=="dark" ? "service__text darkMode":" service__text lightMode"}>Consulting Services</h1>
                <p   className={theme=="dark" ? "service__text p  p__color darkMode":" service__text p p__color lightMode"} >
                We offer consulting services to help businesses improve their operations and achieve their goals. Our team of experts can provide insights and recommendations on a wide range of business topics, including strategy development, process improvement, and organizational design.
                </p>
                
              </div>
            </div>
            <div className={theme=="dark" ? "service__box shadowDark":" service__box shadowLight"}>
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1  className={theme=="dark" ? "service__text darkMode":" service__text lightMode"}>Technical Training</h1>
                <p   className={theme=="dark" ? "service__text p  p__color darkMode":" service__text p p__color lightMode"} >
                We offer technical training programs that cover a wide range of topics, including IT, software development, and engineering. Our programs are designed to help individuals develop the technical skills they need to succeed in their roles.
                </p>
                
              </div>
            </div>
            <div className={theme=="dark" ? "service__box shadowDark":" service__box shadowLight"}>
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1  className={theme=="dark" ? "service__text darkMode":" service__text lightMode"}>Leadership Development</h1>
                <p   className={theme=="dark" ? "service__text p  p__color darkMode":" service__text p p__color lightMode"} >
                We offer leadership development programs to help individuals and organizations enhance their leadership capabilities. Our programs are designed to help individuals develop the skills and knowledge they need to be effective leaders in their organizations.
                </p>
                
              </div>
            </div>
            <div className={theme=="dark" ? "service__box shadowDark":" service__box shadowLight"}>
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1  className={theme=="dark" ? "service__text darkMode":" service__text lightMode"}>Soft Skills Training</h1>
                <p   className={theme=="dark" ? "service__text p  p__color darkMode":" service__text p p__color lightMode"} >
                We offer training programs focused on developing soft skills, such as communication, teamwork, and time management. These skills are critical to the success of any business, and our training programs can help individuals and teams improve their effectiveness in these areas.
                </p>
              </div>
            </div>
            <div className={theme=="dark" ? "service__box shadowDark":" service__box shadowLight"}>
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1  className={theme=="dark" ? "service__text darkMode":" service__text lightMode"}>Business Plan Development</h1>
                <p   className={theme=="dark" ? "service__text p  p__color darkMode":" service__text p p__color lightMode"} >
                We can work with startups to develop a comprehensive business plan that outlines their goals, strategies, and tactics. Our team can provide guidance on market research, financial projections, and risk analysis to ensure that the business plan is well-developed and feasible.
                </p>
                
              </div>
            </div>
          

    
            
    
         
          
         

        {/* </div> */}
      </div>
    </div>
 
    </>
  )
}

export default Servicespage;
