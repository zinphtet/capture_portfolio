import React from 'react'
import styled from 'styled-components'
import { InfoTitle,GreenText } from '../globalStyle'
function Faq() {
  return (
    <FaqSection>
        <InfoTitle>Any Questions ? <br/>  <GreenText>FAQ</GreenText> </InfoTitle>
        <Questions>
           <QuestionItem >
              <Question>How do I start ?</Question>
              <Answer>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur unde explicabo quas quibusdam eos.</Answer>
              <Line ></Line>
           </QuestionItem>

           <QuestionItem >
              <Question>What products do you offer ?</Question>
              <Answer>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur unde explicabo quas quibusdam eos.</Answer>
              <Line ></Line>
           </QuestionItem>

           <QuestionItem >
              <Question>Different Payment Methods ?</Question>
              <Answer>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur unde explicabo quas quibusdam eos.</Answer>
              <Line ></Line>
           </QuestionItem>

           <QuestionItem >
              <Question>How long I will wait ?</Question>
              <Answer>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur unde explicabo quas quibusdam eos.</Answer>
              <Line ></Line>
           </QuestionItem>
        </Questions>
    </FaqSection>
  )
}

export default Faq

const FaqSection = styled.div`
  padding: 8rem 0;
`
const Questions = styled.div`
  padding: 4rem 0;
  display: grid;
  grid-gap: 4rem;
`
const QuestionItem = styled.div`
  display: grid;
  grid-gap: 3rem;
`
const Question = styled.p`
  font-size: 2rem ;
  color:#fff;
  cursor: pointer;
`
const Answer = styled.p`
  font-size: 1.5rem;
  color: gray;
`
const Line = styled.div`
  width: 100%;
  height:.2rem;
  background-color: #fff;
`