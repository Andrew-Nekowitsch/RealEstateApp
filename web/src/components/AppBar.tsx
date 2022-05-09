import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

const pages = ['Pay Rent'];
const accountSettings = ['Profile', 'Account', 'Logout'];

type Props = { theme: boolean; setTheme: any };

const ResponsiveAppBar = ({ theme, setTheme }: Props) => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const toggleDrawer = () => (event: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>) => {
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}
		handleCloseNavMenu();
	};

	const list = () => (
		<Box sx={{ width: 250 }} role='presentation'>
			<List sx={{ display: { md: 'none' } }}>
				{pages.map((text, index) => (
					<ListItem button key={text}>
						<Link href={'/' + text.toLowerCase().replaceAll(' ', '')}>
							<ListItemText primary={text} />
						</Link>
					</ListItem>
				))}
			</List>
			<Divider sx={{ display: xsResolution }} />
			<List>
				{['Settings'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemText primary={text} />
					</ListItem>
				))}
				<ListItem key='themeToggler'>
					<ThemeToggle theme={theme} setTheme={setTheme} />
				</ListItem>
			</List>
		</Box>
	);

	const mdResolution = { xs: 'none', md: 'flex' };
	const xsResolution = { xs: 'flex', md: 'none' };
	return (
		<AppBar position='static'>
			<Container maxWidth={false}>
				<Toolbar>
					<Box>
						<IconButton
							size='large'
							aria-label='nav'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<MenuIcon />
						</IconButton>
						<Drawer anchor='left' open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
							{list()}
						</Drawer>
					</Box>

					<Typography
						variant='h5'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							display: mdResolution,
							fontFamily: 'Bubblegum Sans',
							fontWeight: 700,
							color: 'inherit',
							textDecoration: 'none',
						}}>
						Nekowitsch Realty LLC
					</Typography>
					<Typography
						variant='h5'
						align='center'
						component='a'
						href=''
						sx={{
							mr: 2,
							display: xsResolution,
							flexGrow: 1,
							fontFamily: 'Bubblegum Sans',
							fontWeight: 700,
							color: 'inherit',
							textDecoration: 'none',
						}}>
						Nekowitsch Realty LLC
					</Typography>

					<Box sx={{ flexGrow: 1, display: mdResolution }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
								href={'/' + page.toLowerCase().replaceAll(' ', '')}>
								{page}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}>
							{accountSettings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign='center'>{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
