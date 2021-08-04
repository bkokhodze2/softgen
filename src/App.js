import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import MainContent from "../src/components/main/MainContent.js";
import Footer from "./components/footer/Footer";


function App() {
	return (
		<Router>
			<div className="app">
				<Header />	
       			<MainContent />
				<Footer /> 			
			</div>
		</Router>
	);
}

export default App;
