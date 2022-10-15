import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const Wrapper = styled(Box)(({ width, height }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: `${width}`,
    maxWidth: `${width}`,
    heigt: `${height}`,
}));
