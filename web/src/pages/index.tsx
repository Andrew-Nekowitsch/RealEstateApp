import Head from 'next/head';
import Link from 'next/link';
import Loading from '../components/Loading';
import lightTheme from '../styles/theme/lightTheme';
import darkTheme from '../styles/theme/darkTheme';

import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import Paper from '@mui/material/Paper';
import ThemeToggle from '../components/ThemeToggle';
import AppBar from '../components/AppBar';

export default function App() {
	const [theme, setTheme] = useState(true);
	const appliedTheme = theme ? lightTheme : darkTheme;
	return (
		<ThemeProvider theme={appliedTheme}>
			<Head>
				<title>Nekowitsch Realty LLC</title>
			</Head>

			<AppBar theme={theme} setTheme={setTheme} />
		</ThemeProvider>
	);
}
