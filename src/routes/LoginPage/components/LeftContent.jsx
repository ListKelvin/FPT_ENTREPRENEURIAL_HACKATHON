import Img1 from '../../../assets/Login/image 1.png';

import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

const LeftContent = () => {
    return (
        <Box sx={{ display: { xs: 'none', md: 'none', sm: 'none', lg: 'flex' } }}>
            <img
                src={Img1}
                style={{
                    width: '624px',
                    height: '580px',
                }}
                alt="hinhloggin"
            ></img>
        </Box>
    );
};

export default LeftContent;
