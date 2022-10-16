import Image5 from '../../assets/Register/image 5.png';
import FormRegister from '../../components/SignUp/Form';
import { Background } from './styles';

import { Container, Box } from '@mui/system';

const SignUpPage = () => {
    return (
        <Background>
            <Container
                sx={{
                    display: 'flex',
                    width: '90vw',
                    height: '100vh',
                    alignItems: 'center',
                }}
            >
                <Box
                    style={{
                        width: '450px',
                        height: '630px',
                        display: 'flex',
                        alignItems: 'center',
                        background: '#0F0F0F',
                        border: '1px solid rgba(0, 0, 0, 0.35)',
                        boxShadow: '5px 4px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: '15px',
                        justifyContent: 'center',
                    }}
                >
                    <FormRegister />
                </Box>
            </Container>
        </Background>
    );
};

export default SignUpPage;
