import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useTheme } from '../hook/useTheme';
import './style.css';
import exp from './img/rain.svg'



const AboutPage = () => {

  const {theme}=useTheme()

  return (

    <ContainerAbout>
      <Container  style={{ color: theme=="dark" ? "white" : "black" }}>
        <div className='header' >
          <div className='content' >
            <div className='title'>
            <h1>About Us</h1>

            <div className='body'>
              <div className='about'>
              <p >
            At Training Edge Consulting, we are dedicated to helping businesses achieve their goals through professional training and consulting services. With years of experience in the industry, our team of experts has a proven track record of delivering high-quality solutions that are tailored to each client's unique needs.
            </p>

            <p>
            We understand that every business is different, and that's why we work closely with our clients to develop customized training programs that are specifically designed to meet their individual requirements. Whether you're looking to improve your leadership skills, enhance your technical abilities, or develop a comprehensive business plan, we have the knowledge and expertise to help you succeed.
            </p>

            
              <button>en</button>
            



              </div>
          

            
               <div className='img'> 
               <img src={exp} alt="Logo" />
      
         </div>
            </div>
            </div>
 
           
           
          </div>
         
        </div>
      </Container>
 
    </ContainerAbout>

  );
}

export default AboutPage;




/// style

export const ContainerAbout = styled.div`

margin-top:50px;
padding-bottom:120px;

  .header{
    margin-top:30px;
  }


  .body{

    display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  }


  .about{
    width: 50%;
    margin-right: 6em
  }
  .about p {
    font-size: .8em;
  }

.img{
  flex:1;
  width: 20%;
}
.title{
 
  font-size:30px;
position: relative;

&::before{
  content:" ";
  height: 7px;
  border-radius:5px;
  width: 13%;
 margin:10px 0px;
  background: rgb(1,180,228);
background: linear-gradient(90deg, rgba(1,180,228,1) 18%, rgba(144,206,161,1) 88%);
  display: block;
  position: absolute;
  top: 40px;
  left: 0;
}

.title h1{
  margin-bottom: 1em;
}



}
`