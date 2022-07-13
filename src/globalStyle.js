import styled, { createGlobalStyle } from "styled-components";
import {motion}  from 'framer-motion'
// font-family: 'Lobster', cursive;
// font-family: 'Roboto', sans-serif;

export const GlobalStyle = createGlobalStyle`
  *{
    margin : 0;
    padding : 0;
    box-sizing : border-box;
  }
  body{
    background-color: #1b1b1b;
    overflow: hidden;
  }
  html {
    font-size : 62.5%;
    line-height: 1.5;
    font-family: 'Roboto', sans-serif;
    color: #fff;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style-type: none;
  }
`

export const AppWrapper = styled(motion.div)`
   max-width: 1500px;
   margin: 0 auto;
   /* border: 2px solid red; */
`
export const SectionWrapper = styled(motion.div)`
   max-width: 120rem;
   margin: 0 auto;
`