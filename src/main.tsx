import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { ThemeProvider } from '@mui/material'
import muiTheme from './utils/muiTheme'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={muiTheme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
)
