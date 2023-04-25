import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'


const Logo: FC = () => {

	const handleClick = () => {
		window.scrollTo(0, 0)
	}


	return (
		<Link
			to='/'
			onClick={handleClick}
		>
			<Typography
				line-height={1}
				color='white'>
				Ha Long
				<br />
				Travel
			</Typography>
		</Link>
	)
}

export default Logo