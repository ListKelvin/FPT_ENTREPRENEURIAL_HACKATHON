import React, { useEffect, useState } from 'react';

import { WavyContainer, WavyLink } from 'react-wavy-transitions';

import SecondHandLogo from '../../assets/logo/logodark.png';
import {
    Nav,
    Top,
    Logo,
    RightNav,
    Bottom,
    Search,
    Button,
    NavLink,
    AddingButton,
    Container,
    NavButton,
} from './styled';

import ChatIcon from '@mui/icons-material/Chat';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import SegmentIcon from '@mui/icons-material/Segment';
import Badge from '@mui/material/Badge';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';

function NavBar() {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
        },
        color: 'black',
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '100ch',
                // '&:focus': {
                //     width: '40ch',
                // },
            },
        },
    }));
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        };
    }, []);
    return (
        <Container>
            {(toggleMenu || screenWidth > 1000) && (
                <Nav>
                    <>
                        <Top>
                            <WavyLink to="/" color="#45ce7b">
                                <Logo src={SecondHandLogo}></Logo>
                            </WavyLink>
                            <RightNav>
                                <ul>
                                    <li>
                                        <WavyLink to="/order" color="#45ce7b">
                                            <Badge badgeContent={4} color="primary">
                                                <SegmentIcon />
                                                Đơn hàng
                                            </Badge>
                                        </WavyLink>
                                    </li>
                                    <li>
                                        <WavyLink to="/chat" color="#45ce7b">
                                            <ChatIcon />
                                            Chat
                                        </WavyLink>
                                    </li>
                                    <li>
                                        <WavyLink to="/notification" color="#45ce7b">
                                            <NotificationsIcon />
                                            Thông báo
                                        </WavyLink>
                                    </li>

                                    <Button>
                                        <PermIdentityIcon />
                                        Tài khoản
                                    </Button>
                                </ul>
                            </RightNav>
                        </Top>
                        <Bottom>
                            <Search styled={{ borderRadius: '15px' }}>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            <AddingButton>
                                <NavLink to="post">Đăng Tin</NavLink>
                            </AddingButton>
                        </Bottom>
                    </>
                </Nav>
            )}
            <NavButton onClick={toggleNav} className="btn">
                <MenuIcon />
            </NavButton>
        </Container>
    );
}

export default NavBar;
