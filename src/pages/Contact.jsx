import React from 'react'
import styled from 'styled-components'
import { SectionWrapper } from '../globalStyle';
import { pageAnimation } from '../Animation';

function Contact() {
  return (
    <ContactStyle variants={pageAnimation} initial='hidden' animate ='show' exit='exit'>
      <SectionWrapper>
        <GetInTouch >
          Get in touch.
          </GetInTouch>
          <ContactFrom>
          <Circle></Circle>
            <GetInTouch > Drop an email.</GetInTouch>
          </ContactFrom>
       
          <ContactFrom>
          <Circle></Circle>
            <GetInTouch > Send us a message.</GetInTouch>
          </ContactFrom>
      
          <ContactFrom>
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
    background-color: #fff;
    width:100%;
    color: #1b1b1b;
    height: 90vh;
`
const GetInTouch = styled.p`
  font-size: 3rem;
`
const ContactFrom = styled.div`
  display: flex;
  gap:1rem;
  align-items: center;
`
const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #1b1b1b;
`
