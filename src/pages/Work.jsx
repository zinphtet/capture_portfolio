import React from 'react'
import styled from 'styled-components'
import { pageAnimation ,slideAni} from '../Animation'
import {motion}  from 'framer-motion'
import athelete from '../img/theathlete-big.png'
import goodTime from '../img/goodtimes-small.png'
import racer from '../img/theracer-small.png'
import WorkComponent from '../components/WorkComponent'

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
          <motion.div > 
            <Frame1 variants={slideAni}/>
            <Frame2 variants={slideAni}/>
            <Frame3 variants={slideAni}/>
            <Frame4 variants={slideAni}/>
          </motion.div>
         
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
   overflow-y: hidden;
`
const WorkStyle = styled(motion.div)`
  
   padding: 4rem 2rem;
   display: grid;
   grid-gap: 4rem;
   background-color: #fff;
  max-width: 120rem;
  margin: auto;
  overflow-y: hidden;
 
`

const Frame1 = styled(motion.div)`
      position: absolute;
      top: 20%;
      left:0;
      width : 100%;
      height : 80vh;
      background-color: #e1eb1e;
      overflow-x: hidden;
      
`
const Frame2 = styled(Frame1)`
   background-color: #22eb1e;
`
const Frame3 = styled(Frame1)`
   background-color: #18eee7;
`
const Frame4 = styled(Frame1)`
   background-color: #4b1eeb;
`