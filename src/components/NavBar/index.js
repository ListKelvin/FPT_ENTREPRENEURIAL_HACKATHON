import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    SignUp,
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
    const Navigate = useNavigate();
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: '50px',
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
                width: '115ch',
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
    const { isCartOpen, cartItems } = useSelector((state) => state.cart);

    return (
        <Container>
            {(toggleMenu || screenWidth > 1000) && (
                <Nav>
                    <>
                        <Top>
                            <WavyLink to="/home" color="#45ce7b">
                                <Logo src={SecondHandLogo}></Logo>
                            </WavyLink>
                            <RightNav>
                                <ul>
                                    <li>
                                        <WavyLink to="/cart" color="#45ce7b">
                                            <Badge badgeContent={cartItems.length} color="primary">
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
                                        <WavyLink to="/login">
                                            <PermIdentityIcon />
                                            Đăng Nhập
                                        </WavyLink>
                                    </Button>
                                    <SignUp>
                                        <WavyLink to="/register">
                                            <PermIdentityIcon />
                                            Đăng kí
                                        </WavyLink>
                                    </SignUp>
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
                                <WavyLink to="/post" color="#45ce7b">
                                    Đăng Tin
                                </WavyLink>
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
