import React from 'react';

import { Link } from 'react-router-dom';

import Comment from '../../assets/img/comment.png';
import Home from '../../assets/img/home.png';
import Noti from '../../assets/img/noti.png';

import { UilSetting } from '@iconscout/react-unicons';

const NavIcons = () => {
    return (
        <div className="navIcons">
            <Link to="../home">
                <img src={Home} alt="" />
            </Link>
            <UilSetting />
            <img src={Noti} alt="" />
            <Link to="../chat">
                <img src={Comment} alt="" />
            </Link>
        </div>
    );
};

export default NavIcons;
