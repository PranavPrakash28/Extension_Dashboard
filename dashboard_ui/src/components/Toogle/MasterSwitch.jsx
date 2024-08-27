import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 80,  
  height: 40, 
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 4, 
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(36px)', 
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#65C466',
        opacity: 1,
        border: 0,
      },
    },
    '&.Mui-unchecked': {
      transform: 'translateX(0px)', 
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#E9E9EA',
        opacity: 1,
        border: 0,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '8px solid #fff', 
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 32, 
    height: 32, 
  },
  '& .MuiSwitch-track': {
    borderRadius: 40 / 2, 
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default function CustomizedSwitches() {
  return (
    <FormGroup>
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} />}

      />
    </FormGroup>
  );
}
