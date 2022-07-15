
import React from 'react'
import styled from 'styled-components'
import { SectionWrapper } from '../globalStyle'
import {  Link ,useLocation} from "react-router-dom";
import {motion} from 'framer-motion'
import { navlineAnimation } from '../Animation';
function Navbar() {
    const {pathname} = useLocation()
  return (
      <NavbarStyle className='Navbar'>
       <SectionWrapper>
        <Nav>
         <Brand>
           <Link to={'/'}> Capture</Link>
         </Brand>
         <NavLinks >
           <li><Link to='/'>1.&nbsp;About Us</Link>
               <Line variants={navlineAnimation} initial='hidden'  animate= {pathname==='/'?'show':''}></Line>
           </li>
           <li><Link to='/work'>2.&nbsp;Our Work</Link>
           <Line variants={navlineAnimation} initial='hidden' animate= {pathname==='/work'?'show':''}></Line>
           </li>
           <li><Link to='/contact'>3.&nbsp;Contact</Link>
           <Line variants={navlineAnimation} initial='hidden' animate= {pathname==='/contact'?'show':''}></Line>
           </li>
          </NavLinks>
          </Nav>
       </SectionWrapper>
   </NavbarStyle>
   
  )
}

export default Navbar
const NavbarStyle = styled.div`
position: sticky;
top: 0;
    background-color: #282828;
    width: 100%;
    z-index: 100;
`
const Nav = styled.div`
     width: 100%;
    padding: 1rem 0rem 1.5rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
   @media screen and (max-width : 37.5rem){
    flex-direction: column;
   }
    
`
const Brand  = styled.div`
    a{
        margin: auto;
        font-family: 'Lobster', sans-serif;
        font-size: 3rem;
        color: #fff;
    }
`
const NavLinks = styled(motion.div)`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    width: 100%;
    @media screen and (max-width: 37.5rem) {
          justify-content: space-around;
	}
    li{
        margin: 0rem 2rem;
        @media screen and (max-width: 37.5rem) {
            margin: 0rem 1rem;
	}
        a{
            font-size: 1.75rem;
            color: #fff;
        }
    }
`
const Line = styled(motion.div)`
    width:100%;
    height: .4rem ;
    background-color: #23d997;
    margin-top: .5rem;
    border-radius: .2rem;
`