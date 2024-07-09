import React from 'react'
import './_navbar.scss'
import { Link } from 'react-router-dom'

export const NavBar = () => {
	return (
		<nav>
			<ul>
				<li>Home</li>
				<li>Create recipe</li>
				<li>Saved recipe</li>
			</ul>
			<div>
				<button><Link to={'/login'}>Login</Link></button>
				<button><Link to={'register'}>Sign Up</Link></button>
			</div>
		</nav>
	)
}
