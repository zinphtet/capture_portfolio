import React from 'react'
import styled from 'styled-components'
import { InfoTitle,GreenText } from '../globalStyle'
import { scrollUpAni } from '../Animation'
import {motion} from 'framer-motion'
import { AnimateSharedLayout } from 'framer-motion'
import FaqComponent from './FaqComponent'
const questions = ['How do I start ?' , 'What products do you offer ?','Different Payment Methods ?','How long I will wait ?']
function Faq() {
  return (
    <FaqSection variants={scrollUpAni} initial='hidden' whileInView="show" viewport={{once:false,amount:.1}}>
        <InfoTitle>Any Questions ? <br/>  <GreenText>FAQ</GreenText> </InfoTitle>
        <AnimateSharedLayout>
        <Questions layout>
       {
        questions.map((ques,i)=> <FaqComponent question={ques} key={ques+i} /> )
       }
        </Questions>
        </AnimateSharedLayout>
    </FaqSection>
  )
}

export default Faq

const FaqSection = styled(motion.div)`
  padding: 8rem 0;
`
const Questions = styled(motion.div)`
  padding: 4rem 0;
  display: grid;
  grid-gap: 4rem;
`