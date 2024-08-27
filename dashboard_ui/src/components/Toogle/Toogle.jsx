import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

const LightGreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#81c784', 
    '& + .MuiSwitch-track': {
      backgroundColor: '#81c784', 
    },
  },
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.grey[400], 
  },
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
  return (
    <div>
      <LightGreenSwitch {...label} />
    </div>
  );
}


