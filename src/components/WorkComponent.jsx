

import React from 'react'
// import Athlete from '../img/theathlete-big.png'
import { Img } from '../globalStyle'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { fade ,LineAni,zoomAni} from '../Animation'
import {motion} from 'framer-motion'
const WorkComponent = ({title,img,url}) => {
    const navigate = useNavigate ();
  return (
    <WorkComponentWrapper >
        <WorkTitle variants={fade}>
            {title}
        </WorkTitle>
        <WorkLine variants={LineAni}></WorkLine>
         <ImgContainer>
            <Img variants={zoomAni} src={img} alt="Athlete Image" onClick={()=>navigate(`/work/${url}`)} />
         </ImgContainer>
    </WorkComponentWrapper>
  )
}

export default WorkComponent
const WorkTitle =styled(motion.p) `
   font-size: 3rem;
   color: #1b1b1b;
   line-height: 100%;
   overflow-y: hidden;
`
const WorkLine = styled(motion.div)`
 width:100%;
 height : .5rem;
 background-color: #23d997;
`
const WorkComponentWrapper = styled.div`
    display: grid;
     grid-gap: 2rem;
   
`
const ImgContainer = styled.div`
    max-height: 80vh;
    overflow:hidden;
`