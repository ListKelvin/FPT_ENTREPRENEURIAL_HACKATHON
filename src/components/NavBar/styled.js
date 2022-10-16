import { Link } from 'react-router-dom';
import styled from 'styled-components';

import px2vw from '../../utils/px2vw';

export const NavLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: space-between;

    color: white;
`;
export const Nav = styled.div`
    max-width: 1300px;
    height: 150px;
    z-index: 50;
    width: 100%;
    background-color: #0f0f0f;
    display: flex;
    flex-direction: column;
    transition: 0.3s ease all;
    @media screen and (max-width: 1000px) {
        height: auto;
        padding: 50px;
        align-items: flex-end;
        position: absolute;
        right: 0;
        width: 300px;
        background: #1f1f1f;
    }
`;
export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: flex-end;
        li {
            margin-bottom: 36px !important;
        }
    }
`;
export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        width: 200px;
        align-items: center;
        display: none;
    }
`;
export const Search = styled.input`
    font-family: 'Roboto', sans-serif;
    width: ${px2vw(700)};
    height: 30px;
    background: #ffffff;
    border-radius: 15px;
    border-style: none;
    &:focus {
        border-color: #94ff6e;
    }
`;
export const LeftNav = styled.div``;
export const RightNav = styled.div`
    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    li {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 345;
        font-size: 20px;
        line-height: 23px;
        color: white;
        list-style: none;
        margin: 12px;
        cursor: pointer;
    }
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        ul {
            flex-direction: column;
        }
        li {
            margin-bottom: 36px !important;
        }
    }
`;
export const Logo = styled.img`
    height: 25px;
`;
export const Button = styled.button`
    width: 168px;
    height: 37px;
    background-color: transparent;
    border: 1px solid #ffffff;
    border-radius: 21px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 345;
    font-size: 20px;
    line-height: 23px;
    cursor: pointer;
`;
export const AddingButton = styled(Button)`
    border: 1px solid #94ff6e;
`;
export const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: #0f0f0f;
    justify-content: center;
`;
export const NavButton = styled.button`
    display: none;
    position: absolute;
    right: 10px;
    top: 7px;
    padding: 5px;
    z-index: 99;
    color: #000;
    font-size: 18px;
    background: #1f1f1f1f;
    color: white;
    @media screen and (max-width: 1000px) {
        display: block;
    }
`;
export const SignUp = styled(Button)`
    background: #94ff6e;
    color: black;
    border: none;
    margin-left: 20px;
    @media screen and (max-width: 1000px) {
        margin-top: 30px;
    }
`;
