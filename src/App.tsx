import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

export function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1 style={{ fontWeight: 'bold' }}>Vite + React + TypeScript = Cement!</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
          count is {count}
				</button>
			</div>
		</div>
	);
}
