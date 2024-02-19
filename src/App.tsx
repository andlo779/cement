import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Navbar} from './components/navbar';
import {Index} from './pages/about';
import {Main} from './pages/main';
import {Error} from './pages/error';
import { GlobalStyle } from './styles/global';
import {Footer} from './components/footer';
import { Base } from './components/base';

export const App:React.FC = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Navbar />
			<Base>
				<Routes>
					<Route path='/' element={<Navigate to='/home' />} />
					<Route path='/home' element={<Main />} />
					<Route path='/about' element={<Index />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</Base>
			<Footer />
		</BrowserRouter>
	);
};
