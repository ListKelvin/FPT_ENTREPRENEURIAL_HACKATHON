import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1100px;
    width: 100%;
    background: #1f1f1f;
    border-radius: 15px;
`;
export const Hero = styled.div`
    display: flex;
    justify-content: space-between;
    h1 {
        margin-left: 30px;
        color: #94ff6e;
        text-transform: uppercase;
        font-size: 40px;
        font-family: 'Play', sans-serif;
    }
    p {
        text-decoration: underline;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        color: #94ff6e;
        font-size: 16px;
        line-height: 23px;
        display: flex;
        padding: 4px 12px;
        cursor: pointer;
        align-items: center;
        text-align: center;
        text-decoration-line: underline;
        margin-left: 30px;
        margin-right: 30px;
    }
`;
export const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
export const Container = styled.div`
    margin-top: 24px;
    width: 100%;
    max-width: 1100px;
    margin-bottom: 24px;
`;
export const H1 = styled.h1`
    color: #94ff6e;
    text-transform: uppercase;
    font-size: 40px;
    font-family: 'Play', sans-serif;
`;
export const CategoryContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
`;
export const Box = styled.div`
    width: 145px;
    height: 210px;
    background: rgba(217, 217, 217, 0.08);
    border-radius: 35px;
    text-align: center;
    transition: 0.3s all ease;
    img {
        width: 95%;
    }
    h5 {
        margin: 0;
        color: white;
        font-size: 20px;
    }
    &:hover {
        background-color: #94ff6e;
        transform: translateY(-20px);
    }
`;
