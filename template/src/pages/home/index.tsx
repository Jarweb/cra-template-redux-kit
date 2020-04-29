import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
	return (
		<div>
			<div>home</div>
			<div>counter: <Link to="/counter">counter</Link></div>
		</div>
	)
}