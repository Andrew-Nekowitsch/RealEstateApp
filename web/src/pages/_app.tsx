import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '../utility/createEmotionCache';
import '../styles/global.css';

const clientSideEmotionCache = createEmotionCache();
type Props = { Component: any; pageProps: any };
const MyApp = (props: Props) => {
	const { Component, pageProps } = props;
	const emotionCache = clientSideEmotionCache;

	return (
		<CacheProvider value={emotionCache}>
			<CssBaseline />
			<Component {...pageProps} />
		</CacheProvider>
	);
};

export default MyApp;
