import Navbar from '../NavBar/index';
import Footer from '../footer/Footer.component';
// import Navbar from '../navBar/Navbar.component';
import { ContainerStyle } from './styles';

import CssBaseline from '@mui/material/CssBaseline';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <ContainerStyle maxWidth="xl">
                <CssBaseline />
                {children}
            </ContainerStyle>
            <Footer />
        </>
    );
};

export default Layout;
