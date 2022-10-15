import React from 'react';

import SecondHandLogo from '../../assets/logo/logodark.png';
import {
    Nav,
    Top,
    Logo,
    RightNav,
    Bottom,
    Search,
    Button,
    AddingButton,
    Container,
} from './styled';

import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import SegmentIcon from '@mui/icons-material/Segment';
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
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    return (
        <Container>
            <Nav>
                <Top>
                    <Logo src={SecondHandLogo}></Logo>
                    <RightNav>
                        <ul>
                            <li>
                                <SegmentIcon />
                                Đơn hàng
                            </li>
                            <li>
                                <ChatIcon />
                                Chat
                            </li>
                            <li>
                                <NotificationsIcon />
                                Thông báo
                            </li>
                            <Button>
                                <PermIdentityIcon />
                                Tài khoản
                            </Button>
                        </ul>
                    </RightNav>
                </Top>
                <Bottom>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <AddingButton>Đăng Tin</AddingButton>
                </Bottom>
            </Nav>
        </Container>
    );
}

export default NavBar;
