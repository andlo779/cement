import React, { useState } from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/navbar/navbar";
import {About} from "./pages/about";
import {Home} from "./pages/home";
import {Error} from "./pages/error";
import { GlobalStyle } from './styles/global'
import {Footer} from "./components/footer/footer";
// import reactLogo from './assets/react.svg';
// import typeScriptLogo from './assets/typescript.svg'
// import './App.css';

export const App:React.FC = () => {
	// const [count, setCount] = useState(0);

	// return (
	// 	<div className="App">
	// 		<div>
	// 			<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
	// 				<img src="/vite.svg" className="logo" alt="Vite logo" />
	// 			</a>
	// 			<a href="https://reactjs.org" target="_blank" rel="noreferrer">
	// 				<img src={reactLogo} className="logo react" alt="React logo" />
	// 			</a>
	// 			<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
	// 				<img src={typeScriptLogo} className="logo" alt="TypeScript logo" />
	// 			</a>
	// 		</div>
	// 		<h1 style={{ fontWeight: 'bold' }}>Vite + React + TypeScript = Cement!</h1>
	// 		<div className="card">
	// 			<button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
	// 			</button>
	// 		</div>
	// 	</div>
	// );
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Navbar />
			<Routes>
				<Route path='/' element={<Navigate to='/home' />} />
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<Error />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
