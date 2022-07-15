import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

export const GlobalStyle = createGlobalStyle`
  *{
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    overflow-x: hidden;
  }
  body{
    background-color: #1b1b1b;
    overflow-x: hidden;
    overflow-y: auto;
  }
  html {
    font-size : 62.5%;
    line-height: 1.5;
    font-family: 'Roboto Mono', monospace;
    color: #fff;
    overflow-x: hidden;
    overflow-y: auto;
    @media screen and (max-width : 56.25rem){
      font-size: 59.375%;
    }
    @media screen and (max-width : 37.5rem){
      font-size: 56.25%;
    }
    @media screen and (max-width : 25rem){
      font-size: 50%;
    }
  }
  a{
    text-decoration: none;
  }
  li{
    list-style-type: none;
  }
`;

export const AppWrapper = styled(motion.div)`
	max-width: 1500px;
	margin: 0 auto;
  overflow-y: hidden;

	
`;
export const SectionWrapper = styled(motion.div)`
	max-width: 120rem;
	margin: 0 auto;
	padding: 0rem 2rem;
	/* border: 4px solid red; */
`;

export const Button = styled(motion.button)`
	padding: 0.75rem 1.5rem;
	border: 0.2rem solid #23d997;
	background-color: transparent;
	color: #fff;
	cursor: pointer;
	border-radius: 0.2rem;
`;
export const Img = styled(motion.img)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	max-height: 80rem;
	cursor: pointer;
  overflow-y: hidden;

	@media screen and (max-width: 37.5rem) {
		max-height: 40rem;
	}
`;
export const GreenText = styled.span`
	color: #23d997;
`;
export const InfoTitle = styled(motion.p)`
	font-size: 4rem;
	line-height: 1.4;
`;
export const Para = styled(motion.p)`
	font-size: 1.75rem;
`;
