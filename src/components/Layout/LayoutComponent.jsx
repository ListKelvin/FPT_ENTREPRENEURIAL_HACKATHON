import Navbar from '../NavBar/index';
import Footer from '../footer/Footer.component';
// import Navbar from '../navBar/Navbar.component';
import { ContainerStyle } from './styles';

import CssBaseline from '@mui/material/CssBaseline';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
    // <Footer />
};

export default Layout;
