import React from 'react'
import styled from 'styled-components'
import { SectionWrapper } from '../globalStyle';
import { pageAnimation } from '../Animation';
import {motion} from 'framer-motion'
import { fade2 } from '../Animation';
function Contact() {
  return (
    <ContactStyle >
      <SectionWrapper variants={pageAnimation} initial='hidden' animate ='show' exit='exit' style={{background:'#fff'}}>
        <GetInTouch variants={fade2}>
          Get in touch.
          </GetInTouch>
          <ContactFrom variants={fade2}>
          <Circle></Circle>
            <GetInTouch > Drop an email.</GetInTouch>
          </ContactFrom>
       
          <ContactFrom variants={fade2}>
          <Circle></Circle>
            <GetInTouch > Send us a message.</GetInTouch>
          </ContactFrom>
      
          <ContactFrom variants={fade2}>
          <Circle></Circle>
            <GetInTouch > Socials</GetInTouch>
          </ContactFrom>
       
       </SectionWrapper>
    </ContactStyle>
  )
}

export default Contact;


const ContactStyle = styled.div `
    /* border : 2px solid red; */
    padding: 6rem 2rem;
    width:100%;
    color: #1b1b1b;
    height: 90vh;
    background-color: #fff;
`
const GetInTouch = styled(motion.p)`
  font-size: 3rem;
`
const ContactFrom = styled(motion.div)`
  display: flex;
  gap:1rem;
  align-items: center;
  margin: 1.5rem 0;
`
const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #1b1b1b;
`
