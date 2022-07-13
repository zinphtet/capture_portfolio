import React from 'react'
import styled from 'styled-components'
import { pageAnimation } from '../Animation'
import {motion}  from 'framer-motion'
function Work() {
  return (
    < WorkStyle variants={pageAnimation} initial='hidden' animate ='show' exit='exit'>
      Work
    </ WorkStyle>
  )
}

export default Work

const WorkStyle = styled(motion.div)`
   height: 70vh;
   background-color: green;
`