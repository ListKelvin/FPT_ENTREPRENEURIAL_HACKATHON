import Img1 from '../../../assets/Login/image 1.png';

import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

const LeftContent = () => {
    return (
        <Box>
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
