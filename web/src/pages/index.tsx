import Head from 'next/head';
import Link from 'next/link';
import Loading from '../components/Loading';
import lightTheme from '../styles/theme/lightTheme';
import darkTheme from '../styles/theme/darkTheme';

import React, { useState } from 'react';
import { Card, ThemeProvider } from '@mui/material';
import AppBar from '../components/AppBar';
import SelectDate from '../components/SelectDate';
import GoogleSignIn from '../components/GoogleSignIn';

export default function App() {
	const [theme, setTheme] = useState(true);
	const appliedTheme = theme ? lightTheme : darkTheme;
	return (
		<ThemeProvider theme={appliedTheme}>
			<Head>
				<title>Nekowitsch Realty LLC</title>
			</Head>

			<AppBar theme={theme} setTheme={setTheme} />
			<Card sx={{ minWidth: 120, maxWidth: 500 }}>
				<SelectDate></SelectDate>
				<GoogleSignIn></GoogleSignIn>
			</Card>
		</ThemeProvider>
	);
}
