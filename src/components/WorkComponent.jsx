

import React from 'react'
// import Athlete from '../img/theathlete-big.png'
import { Img } from '../globalStyle'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
const WorkComponent = ({title,img,url}) => {
    const navigate = useNavigate ();
  return (
    <WorkComponentWrapper >
        <WorkTitle>
            {title}
        </WorkTitle>
        <WorkLine></WorkLine>
         <ImgContainer>
            <Img src={img} alt="Athlete Image" onClick={()=>navigate(`/work/${url}`)} />
         </ImgContainer>
    </WorkComponentWrapper>
  )
}

export default WorkComponent
const WorkTitle =styled.p `
   font-size: 3rem;
   color: #1b1b1b;
   line-height: 90%;
`
const WorkLine = styled.div`
 width:100%;
 height : .5rem;
 background-color: #23d997;
`
const WorkComponentWrapper = styled.div`
    display: grid;
     grid-gap: 2rem;
     /* border: 2px solid blue; */
`
const ImgContainer = styled.div`
    max-height: 80vh;
`