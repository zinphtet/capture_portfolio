import React from 'react'
import { SectionWrapper } from '../globalStyle'
import HomeOne from '../img/home1.png'
import { Button } from '../globalStyle'
import styled from 'styled-components'
import { Img ,GreenText ,InfoTitle,Para} from '../globalStyle'
import { titleAni ,fade,zoomAni} from '../Animation'
import { motion } from 'framer-motion'
import Wave from './Wave'
function AboutUs() {
  
  return (
   <AboutUsWrapper >
      <AboutInfo >
      <Wave/>
        <Infos >
              <InfoTitle
              variants={titleAni}
              >We work to make</InfoTitle>
              <InfoTitle   variants={titleAni}>your <GreenText>dreams</GreenText> come</InfoTitle>
              <InfoTitle   variants={titleAni}>true</InfoTitle>
         </Infos>
         <Para variants={fade}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ad eveniet. Commodi quidem obcaecati laudantium.
         </Para>
         <Button variants={fade}>
          Contact Us
         </Button>
      </AboutInfo>
      
      <InfoImg >
        <ImgContainer >
          <Img variants={zoomAni}  src={HomeOne}  alt="Img for aboutus section" />
        </ImgContainer>
      </InfoImg>
   </AboutUsWrapper>
  )
}

export default AboutUs
const InfoImg = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Infos = styled(motion.div)`
 z-index : 2;
 overflow : hidden;
`
const ImgContainer = styled(motion.div)`
   max-width : 35rem;
   z-index : 2;
   overflow : hidden;
`

const AboutUsWrapper = styled(SectionWrapper)`
     display: flex;
     align-items: center;
     gap:2rem;
     position : relative;
     overflow-y: hidden;
     padding: 6rem 0 8rem 0;
     &>*{
      flex: 1;
      
     }
     @media screen and (max-width : 56.25rem){
        flex-direction: column;
     }

`
const AboutInfo = styled.div`

   &>*{
    margin: 2rem 0;
   }
   @media screen and (max-width : 56.25rem){
       text-align: center;
     }
`

