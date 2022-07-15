import React from 'react'
import racer from '../img/theracer-small.png'
import racerTwo from '../img/racer_2.jpg'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import { SectionWrapper } from '../globalStyle'
import athleteOne from '../img/athlete-small.png'
import athleteTwo from '../img/athlete2.png'
import goodtimeOne from '../img/goodtimes-small.png'
import goodtimeTwo from '../img/goodtime2.jpg'
import { motion } from 'framer-motion'
import { pageAnimation ,scrollUpAni} from '../Animation'
// const 
const data = {
    athlete : {
         title : 'The Athlete',
         img : [athleteOne,athleteTwo],
    },
    racer : {
        title : 'The Racer',
        img : [racer,racerTwo],
    },
    goodtime : {
        title : 'The Good Time',
        img : [goodtimeOne,goodtimeTwo],
    }

}

const WorkDetail = () => {
   const {workId} = useParams()
  
   const {title , img } = data[workId];
  return (
    <WorkDetailWrapper variants={pageAnimation} initial='hidden' animate ='show' exit='exit'>
        <FirstDiv>
            <WorkTitle>
             {title}
           </WorkTitle>
           <ImgContainer>
            <IMG src={img[0]} alt="Racer Image" />
           </ImgContainer>
        </FirstDiv>
      < WorkDetailss variants={scrollUpAni} initial='hidden' whileInView="show" viewport={{once:false,amount:.1}}>
           <WorkInfo>
              < WrokInfoTitle >
                Truly A masterpiece
                <Line></Line>
              </ WrokInfoTitle >
              <WorkInfoPara>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolore dolor velit reprehenderit 
              </WorkInfoPara>
           </WorkInfo>

           <WorkInfo>
              < WrokInfoTitle >
                Fresh Look on a brutal sport
                <Line></Line>
              </ WrokInfoTitle >
              <WorkInfoPara>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolore dolor velit reprehenderit 
             
              </WorkInfoPara>
           </WorkInfo>


           <WorkInfo>
              < WrokInfoTitle >
               It's Ok lmao.
                <Line></Line>
              </ WrokInfoTitle >
              <WorkInfoPara>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolore dolor velit reprehenderit 
              </WorkInfoPara>
           </WorkInfo>
      </ WorkDetailss>
      <ImgContainer variants={scrollUpAni} initial='hidden' whileInView="show" viewport={{once:false,amount:.1}}>
        <IMG src={img[1]} alt="racerTwo" />
      </ImgContainer>
    </WorkDetailWrapper>
  )
}

export default WorkDetail
const WorkInfo = styled.div`
     display:grid;
     grid-gap: 2rem;
`
const WorkDetailWrapper = styled(motion.div)`
    /* display: grid;
    grid-gap: 10rem;
    padding: 6rem 0; */
    &>*{
        margin:5rem 0;
    }
`
const FirstDiv = styled.div`
    display: grid;
    grid-gap: 2rem;
    overflow-y:hidden;
`
const WorkTitle = styled.p`
    text-align: center;
    font-size: 2.5rem;
`
const ImgContainer = styled(motion.div)`
    max-height: 90vh;
    overflow:hidden;
`
const IMG = styled.img`
    width:100%;
    height : 100%;
    object-fit: cover;
    overflow:hidden;
`
const WorkDetailss = styled(SectionWrapper)`
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(auto-fit, minmax(30rem , 1fr));
    /* border: 2px solid red; */
    padding: 5rem 2rem;
`
const Line = styled.div`
    margin:1rem 0;
    width:50%;
    height : .5rem;
    background-color: #23d997;
`
const WrokInfoTitle = styled.p`
   font-size : 2rem;

`
const WorkInfoPara = styled.p`
    font-size: 1.5rem;
    color: gray;
`