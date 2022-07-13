import React from 'react';

import { AppWrapper } from './globalStyle';
import About from './pages/About';
import Work from './pages/Work';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import { Routes, Route ,useLocation} from 'react-router-dom';
import {  AnimatePresence } from "framer-motion"
function App() {
	const location= useLocation()
	console.log(location)
	return (
		<AppWrapper  initial='hidden' animate ='show' exit ='exit'>
			<Navbar />
			<AnimatePresence exitBeforeEnter initial={false}>
		 	 <Routes key={location.pathname} location={location}>
				 <Route path='/' element={<About/>} />
				 <Route path='/work' element={<Work/>} />
				 <Route path='/contact' element={<Contact/>} />
			 </Routes>
			 </AnimatePresence>
		</AppWrapper>
	);
}

export default App;
