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
   console.log(workId)
   const {title , img } = data[workId];
  return (
    <WorkDetailWrapper>
        <FirstDiv>
            <WorkTitle>
             {title}
           </WorkTitle>
           <ImgContainer>
            <IMG src={img[0]} alt="Racer Image" />
           </ImgContainer>
        </FirstDiv>
      < WorkDetailss>
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
      <ImgContainer>
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
const WorkDetailWrapper = styled.div`
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
`
const WorkTitle = styled.p`
    text-align: center;
    font-size: 2.5rem;
`
const ImgContainer = styled.div`
    max-height: 90vh;
`
const IMG = styled.img`
    width:100%;
    height : 100%;
    object-fit: cover;
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