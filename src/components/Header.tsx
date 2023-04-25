import { FC } from 'react'
import { Divider, Grid, Stack, Link } from '@mui/material'
import Logo from '@/components/Logo'


const Header: FC = () => {
	return (
		<>
			<Grid
				zIndex={100}
				container
				position='fixed'
				top={0}
				left={0}
				px={10}
				py={2}
				direction='row'
				justifyContent='space-between'
				alignItems='center'
			>
				<Grid item>
					<Logo />
				</Grid>
				<Grid item>
					<Stack
						direction='row'
						spacing={2}>
						<Link
							color='white'
							href='#about'
							underline='hover'
							variant='h6'
						>About</Link>
						<Link
							color='white'
							href='#contact'
							underline='hover'
							variant='h6'
						>Contact</Link>
					</Stack>
				</Grid>
			</Grid>
			<Divider sx={{ position: 'fixed' }} />
		</>
	)
}

export default Header