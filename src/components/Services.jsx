import React from 'react'
import { InfoTitle,GreenText,Para,Img } from '../globalStyle'
import HomeTwo from '../img/home2.png'
import dia from '../img/diaphragm.svg'
import clock from '../img/clock.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import styled from 'styled-components'
import { scrollUpAni } from '../Animation'
import {motion} from 'framer-motion'
function Services() {
  return (
    <ServiceSection variants={scrollUpAni} initial='hidden' whileInView="show" viewport={{once:false,amount:.1}}>
       <div className="services">
          <p className="service_title">
                <InfoTitle>High <GreenText>quality</GreenText> services</InfoTitle>
                <MyService>
                   <ServiceItem>
                      < ServiceImg>
                       <img src={clock} alt="clock" />
                        <Btn2>Efficent</Btn2>
                      </ ServiceImg>
                      <Para>Lorem ipsum dolor sit amet.</Para>
                   </ServiceItem>

                   <ServiceItem>
                      < ServiceImg>
                       <img src={teamwork} alt="clock" />
                        <Btn2>Teamwork</Btn2>
                      </ ServiceImg>
                      <Para>Lorem ipsum dolor sit amet.</Para>
                   </ServiceItem>

                   <ServiceItem>
                      < ServiceImg>
                       <img src={dia} alt="clock" />
                        <Btn2>Pro Grade Gear</Btn2>
                      </ ServiceImg>
                      <Para>Lorem ipsum dolor sit amet.</Para>
                   </ServiceItem>

                   <ServiceItem>
                      < ServiceImg>
                       <img src={money} alt="clock" />
                        <Btn2>Affordable</Btn2>
                      </ ServiceImg>
                      <Para>Lorem ipsum dolor sit amet.</Para>
                   </ServiceItem>
                   
                </MyService>
          </p>
       </div>
       <ServiceImgDiv>
           <ImgContainer>
            <Img src={HomeTwo} alt="high quality image" />
           </ImgContainer>
       </ServiceImgDiv>
    </ServiceSection>
  )
}

export default Services

const ServiceSection =styled(motion.div)`
  padding: 8rem 0rem;
  display: flex;
  gap:2rem;
 
  &>*{
    flex: 1;

  } 
  @media screen and (max-width: 56.25rem){
    flex-direction: column;
    &>*{
      text-align: center;
    }
  }
`
const MyService = styled.div`
   display: grid;
   grid-gap: 4rem;
   padding: 4rem 0;
   grid-template-columns: repeat(auto-fit , minmax(20rem , 1fr));
`
const ServiceImg = styled.div`
   display: flex;
   align-items: center;
   gap: 2rem;
`
const ServiceItem = styled.div` 
   display: grid;
   grid-gap: 1rem;
   /* border: 1px solid red; */
`
const Btn2 = styled.button`
  padding: 1rem 2rem;
  border: none;
  outline : none;
`

const ServiceImgDiv =styled.div`
  display: flex;
`
const ImgContainer = styled.div` 
 max-width:35rem;
 margin: auto;
 @media screen and (max-width: 56.25rem){
  max-width:45rem;
 }
`

