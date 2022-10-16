import UploadSection from './Upload';
import PostForm from './components/PostForm';

import { Container } from '@mui/material';

const Index = () => {
    return (
        <div style={{ background: '#282828' }}>
            <Container
                sx={{
                    display: 'flex',
                    width: '90vw',
                    minHeight: '110vh',
                    background: '#282828',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <UploadSection />
                <PostForm />
            </Container>
        </div>
    );
};

export default Index;
