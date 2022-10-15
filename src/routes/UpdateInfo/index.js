import FormUpdate from './component/FormUpdate';

import { Container, Box } from '@mui/system';

const UpdateInfoPage = () => {
    return (
        <Container
            maxWidth={false}
            sx={{
                padding: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#0f0f0f',
                width: '100%',
                flexDirection: 'column',
            }}
        >
            <Box
                style={{
                    width: '750px',
                    height: '630px',
                    display: 'flex',
                    alignItems: 'center',
                    background: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.35)',
                    boxShadow: '5px 4px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '15px',
                    justifyContent: 'center',
                }}
            >
                <FormUpdate />
            </Box>
        </Container>
    );
};

export default UpdateInfoPage;
