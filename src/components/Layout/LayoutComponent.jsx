import Navbar from '../NavBar/index';
import Footer from '../footer/Footer.component';
// import Navbar from '../navBar/Navbar.component';
import { ContainerStyle, SupContainer } from './styles';

import CssBaseline from '@mui/material/CssBaseline';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <CssBaseline />
            {children}
            {/* <Footer /> */}
        </>
    );
    // <Footer />
};

export default Layout;
