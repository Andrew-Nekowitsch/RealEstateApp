import React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';

type Props = { theme: boolean; setTheme: any };

export default function ThemeToggle({ theme, setTheme }: Props) {
	const icon = theme ? <Brightness3Icon /> : <Brightness7Icon />;

	return (
		<Typography>
			Theme
			<IconButton edge='end' color='default' aria-label='mode' onClick={() => setTheme(!theme)}>
				{icon}
			</IconButton>
		</Typography>
	);
}
