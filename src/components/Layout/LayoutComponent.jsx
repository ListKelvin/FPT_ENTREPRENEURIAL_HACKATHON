import Navbar from '../NavBar/index';
import Footer from '../footer/Footer.component';
// import Navbar from '../navBar/Navbar.component';
import { ContainerStyle } from './styles';

import CssBaseline from '@mui/material/CssBaseline';

const Layout = ({ children }) => {
    return (
        <div style={{ background: 'rgba(15, 15, 15, 1)' }}>
            <Navbar />
            <ContainerStyle maxWidth={false}>
                <CssBaseline />
                {children}
            </ContainerStyle>
            <Footer />
        </div>
    );
};

export default Layout;
