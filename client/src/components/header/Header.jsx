import React, { useState } from 'react'
import './_header.scss'
import { NavBar } from '../navbar/NavBar'

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="header_content">
					<div className="logo">
						<h1>Logo</h1>
					</div>
					<NavBar />
				</div>
			</div>
		</header>
	)
}

export default Header
