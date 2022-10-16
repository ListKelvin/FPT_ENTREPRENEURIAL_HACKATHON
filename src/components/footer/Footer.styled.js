// import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.footer`
    width: 100%;
    height: 270px;
    background: #0f0f0f;
    color: White;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* position: fixed;
    bottom: 0; */
`;
export const Foot = styled.div`
    width: 100%;
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-items: space-between;
    text-align: center;
`;

export const Right = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;
export const FirstCol = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    flex-direction: column;
    ul {
        padding: 0;
    }
    li {
        font-size: 15px;
        list-style: none;
    }
`;
export const Img = styled.img`
    margin: 4px 12px;
`;
