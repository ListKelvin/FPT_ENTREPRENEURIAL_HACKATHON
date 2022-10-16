import { Section } from '../../components/Container';
import LeftContent from './components/LeftContent';
// import { LinkStyle } from '../sign-up/Components/SignUpForm.styles';
import RightContent from './components/RightContent';

// import { StyleSection } from './styles';
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

// import Grid from '@mui/material/Grid';

const SignInComponent = () => {
    return (
        <div style={{ background: '#282828' }}>
            <Container
                sx={{
                    display: 'flex',
                    width: '90vw',
                    height: '100vh',
                    background: '#282828',
                    alignItems: 'center',
                }}
            >
                <LeftContent />
                <RightContent />
            </Container>
        </div>
    );
};

export default SignInComponent;
