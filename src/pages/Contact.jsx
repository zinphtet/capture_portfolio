import React from 'react'
import styled from 'styled-components'
import { SectionWrapper } from '../globalStyle';
import { pageAnimation } from '../Animation';
function Contact() {
  return (
    <ContactStyle variants={pageAnimation} initial='hidden' animate ='show' exit='exit'>Contact</ContactStyle>
  )
}

export default Contact;


const ContactStyle = styled(SectionWrapper) `
  height : 70vh;
  width:100%;
  background-color: blue;
`