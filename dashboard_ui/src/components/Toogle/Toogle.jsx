import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

const LightGreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#81c784', // Light green color for the thumb
    '& + .MuiSwitch-track': {
      backgroundColor: '#81c784', // Light green color for the track
    },
  },
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.grey[400], // Default track color when off
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
