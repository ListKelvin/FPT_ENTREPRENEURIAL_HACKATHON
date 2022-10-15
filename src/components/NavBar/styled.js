import styled from 'styled-components';

import px2vw from '../../utils/px2vw';

export const Nav = styled.div`
    max-width: 1300px;
    height: 150px;
    width: 100%;
    background-color: #0f0f0f;
    display: flex;
    flex-direction: column;
`;
export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
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
    flex: 0.75;
    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    li {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 345;
        font-size: 20px;
        line-height: 23px;
        color: white;
        list-style: none;
        margin: 12px;
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
    margin-right: 15px;
`;
export const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: #0f0f0f;
    justify-content: center;
`;
