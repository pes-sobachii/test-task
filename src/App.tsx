import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import GlobalStyle from './globalStyles'
import Header from './organisms/Header'
import Favourites from './pages/Favourites'

function App() {
	return (
		<div>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/favourite'} element={<Favourites />} />
			</Routes>
		</div>
	)
}

export default App
