


import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { useState } from 'react'
const FaqComponent = ({question}) => {
    const [show , setShow ] = useState(false)
  return (
    <QuestionItem layout>
              <Question layout onClick={()=>setShow(prev=>!prev)}>{question}</Question>
              {
                show && 
                <Answer>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur unde explicabo quas quibusdam eos.</Answer>
              }
             
              <Line ></Line>
    </QuestionItem>
  )
}

export default FaqComponent



const QuestionItem = styled(motion.div)`
  display: grid;
  grid-gap: 3rem;
`
const Question = styled(motion.p)`
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