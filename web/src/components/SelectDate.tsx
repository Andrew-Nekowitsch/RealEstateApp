import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
	const [date, setDate] = React.useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setDate(event.target.value as string);
	};

	return (
		<Box sx={{ minWidth: 120, maxWidth: 345, m: 2, mx: 'auto' }}>
			<FormControl fullWidth>
				<InputLabel id='select-date-label'>Date</InputLabel>
				<Select labelId='select-date-label' id='select-date' value={date} label='Date' onChange={handleChange}>
					<MenuItem value={'5/9/2022'}>5/9/2022</MenuItem>
					<MenuItem value={'5/10/2022'}>5/10/2022</MenuItem>
					<MenuItem value={'5/11/2022'}>5/11/2022</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
