import React from 'react'
import { SectionWrapper } from '../globalStyle'
import HomeOne from '../img/home1.png'
import { Button } from '../globalStyle'
import styled from 'styled-components'
import { Img ,GreenText ,InfoTitle,Para} from '../globalStyle'
import { titleAni ,container} from '../Animation'
import { motion } from 'framer-motion'
function AboutUs() {
  return (
   <AboutUsWrapper >
      <AboutInfo  >
        <Infos>
              <InfoTitle
              >We work to make</InfoTitle>
              <InfoTitle>your <GreenText>dreams</GreenText> come</InfoTitle>
              <InfoTitle>true</InfoTitle>
         </Infos>
         <Para >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ad eveniet. Commodi quidem obcaecati laudantium.
         </Para>
         <Button 
         initial = {{opacity : 0}}
         animate ={{opacity : 1}}
         transition = {{duration : 1}}
         >
          Contact Us
         </Button>
      </AboutInfo>
      <InfoImg>
        <ImgContainer>
          <Img src={HomeOne} alt="Img for aboutus section" />
        </ImgContainer>
      </InfoImg>
   </AboutUsWrapper>
  )
}

export default AboutUs
const InfoImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Infos = styled.div`
`
const ImgContainer = styled.div`
   max-width : 35rem;

`

const AboutUsWrapper = styled(SectionWrapper)`
     display: flex;
     align-items: center;
     gap:2rem;
     /* border: 2px solid red;  */
     /* border: 2px solid red; */
     padding: 6rem 0 8rem 0;
     &>*{
      flex: 1;
      /* border: 1px solid blue; */
      
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

