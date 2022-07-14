import React from 'react'
import styled from 'styled-components'
import { pageAnimation } from '../Animation'
import {motion}  from 'framer-motion'
import athelete from '../img/theathlete-big.png'
import goodTime from '../img/goodtimes-small.png'
import racer from '../img/theracer-small.png'
import WorkComponent from '../components/WorkComponent'
import { SectionWrapper } from '../globalStyle'
const data = [
  {
    title : 'The Athlete',
    img : athelete,
    url : 'athlete'
  },
  {
    title : 'The Racer',
    img : racer,
    url :'racer',
  },
  {
    title : 'Good Times',
    img : goodTime,
    url: 'goodtime'
  }
]
function Work() {
  return (
    <WorkWrapper variants={pageAnimation} initial='hidden' animate ='show' exit='exit' >
    < WorkStyle >
         {/* <SectionWrapper> */}
            {/* <WorkComponent/> */}
          {/* </SectionWrapper> */}

          {
           data.map(({title,img,url},i)=>{
            return <WorkComponent key={i} title={title} img = {img}  url = {url} />
           })
          }
    </ WorkStyle>
    </WorkWrapper >
  )
}

export default Work
const WorkWrapper = styled(motion.div)`
   background-color: #fff;
`
const WorkStyle = styled(motion.div)`
   /* height: 70vh; */
   /* background-color: green; */
  
   padding: 4rem 0;
   display: grid;
   grid-gap: 4rem;
   background-color: #fff;
  max-width: 120rem;
  margin: auto;
  /* width: 100vw; */
`
