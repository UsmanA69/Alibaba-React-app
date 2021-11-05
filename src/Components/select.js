import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [buySell, setBuySell] = React.useState('');

  const handleChange = (event) => {
    setBuySell(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">Select</InputLabel> */}
        <Select
          sx={{height:"25px",margin:'10px'}}
          variant="standard"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={buySell}
          label="buySell"
          onChange={handleChange}
        >
          <MenuItem value="products">Products</MenuItem>
          <MenuItem value="suppliers">Suppliers</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
