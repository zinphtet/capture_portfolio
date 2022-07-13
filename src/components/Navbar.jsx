
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
         <NavLinks>
           <li><Link to='/'>1. About Us</Link>
               <Line variants={navlineAnimation} initial='hidden' animate= {pathname==='/'?'show':''}></Line>
           </li>
           <li><Link to='/work'>2. Our Work</Link>
           <Line variants={navlineAnimation} initial='hidden' animate= {pathname==='/work'?'show':''}></Line>
           </li>
           <li><Link to='/contact'>3. Contact</Link>
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
    background-color: #282828;
`
const Nav = styled.div`
     width: 100%;
     padding: 2rem 0rem;
    display: flex;
    align-items: center;
    /* border: 1px solid red; */
    height: 10vh;
 
    
`
const Brand  = styled.div`
    a{
        margin: auto;
        font-family: 'Lobster', sans-serif;
        font-size: 3rem;
        color: #fff;
    }
`
const NavLinks = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    /* border: 1px solid blue; */
    li{
        margin: 0rem 2rem;
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
    margin-top: 1rem;
    border-radius: .2rem;
`