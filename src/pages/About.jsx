import React from 'react'
import styled from 'styled-components'

import AboutUs from '../components/AboutUs'
import Faq from '../components/Faq'
import Services from '../components/Services'
import { SectionWrapper } from '../globalStyle'
import {pageAnimation}  from '../Animation'
function About() {
  return (
    <AboutStyle variants={pageAnimation} initial='hidden' animate ='show' exit='exit'>
        <AboutUs/>
        <Services/>
        <Faq/>
       
    </AboutStyle>
  )
}

export default About

const AboutStyle =styled(SectionWrapper)`
    height: 70vh;
    width: 100%;
    background-color: red;
`