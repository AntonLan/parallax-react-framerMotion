import { createTheme } from '@mui/material'

const muiTheme = createTheme({
	typography: {
		fontFamily: [
			'Poppins'
		].join(',')
	},
	components: {
		MuiDivider: {
			styleOverrides: {
				root: {
					background: 'white',
					opacity: '50%'
				}
			}
		}
	}
})

export default muiTheme