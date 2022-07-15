

import React from 'react'
import {motion}  from 'framer-motion'
import styled from 'styled-components'
import { WaveAni } from '../Animation'
const Wave = () => {
  return (
    <WaveSvg  viewBox="0 0 1440 363" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
     variants={WaveAni}
     d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5" stroke="#D96ED4" strokeOpacity="0.5" strokeWidth="10"/>
    </WaveSvg>
  )
}

export default Wave

const WaveSvg = styled.svg`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 100%;
      z-index: 1;

      @media screen and (max-width: 56.25rem){
      
        top: 15%;
        left: 0%;
        transform: translate(0%,0%);
      }
`