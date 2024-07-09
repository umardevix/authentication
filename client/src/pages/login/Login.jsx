import React from 'react'
import '../../styles/_login.scss'

const Login = () => {

	return (
		<div className='container'>
			<div className='form_block'>

				<form>
					<input type="text" placeholder='Username...' />
					<input type="password" placeholder='Password...' />
					<button type='submit'>Login</button>
				</form>
			</div>
		</div>
	)
}

export default Login