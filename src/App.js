import React from 'react';

import { AppWrapper } from './globalStyle';
import About from './pages/About';
import Work from './pages/Work';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import WorkDetail from './pages/WorkDetail';
import { Routes, Route ,useLocation} from 'react-router-dom';
import {  AnimatePresence } from "framer-motion"
import ScrollTop from './components/ScrollTop';
function App() {
	const location= useLocation()
	// console.log(location)
	return (
		<AppWrapper>
			<ScrollTop/>
			<Navbar />
			<AnimatePresence exitBeforeEnter >
		 	 <Routes key={location.pathname} location={location}>
				 <Route path='/' element={<About/>} />
				 <Route path='/work' element={<Work/>} />
				 <Route path='/contact' element={<Contact/>} />
				 <Route path='/work/:workId' element={<WorkDetail/>} />
			 </Routes>
			 </AnimatePresence>
		</AppWrapper>
	);
}

export default App;
