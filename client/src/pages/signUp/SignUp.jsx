import React from 'react'
import '../../styles/_login.scss'

export const SignUp = () => {
	return (
		<div className='container'>
			<div className='form_block'>

				<form>
					<input type="text" placeholder='Username...' />
					<input type="password" placeholder='Password...' />
					<button type='submit'>Register</button>
				</form>
			</div>
		</div>
	)
}
