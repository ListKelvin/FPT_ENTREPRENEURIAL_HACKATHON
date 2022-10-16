import { up, down, between, only } from 'styled-breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #0f0f0f;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Wrapper = styled.div`
    width: 100%;
    max-width: 1100px;
`;
export const ThumbContainer = styled.div`
    display: flex;
    img {
        width: 137.5px;
    }
`;
export const BigImg = styled.img`
    width: 550px;
`;
export const Section = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    ${down('xl')} {
        flex-direction: column;
        align-items: center;
    }
`;
export const Description = styled.div`
    width: 400px;
    background: rgba(217, 217, 217, 0.08);
    border-radius: 15px;
    margin-bottom: 30px;
    h1 {
        margin: 12px 12px;
    }
    p {
        margin: 12px 12px;
    }
    ${down('xl')} {
    }
`;
export const Price = styled.h1`
    color: #94ff6e;
    font-size: 36px;
`;
export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
export const AddButton = styled.div`
    width: 180px;
    height: 40px;
    border: 1px solid white;
    color: white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s ease all;
    &:hover {
        transform: translateY(-20px);
    }
`;
export const BuyButton = styled.div`
    width: 180px;
    height: 40px;
    background: #94ff6e;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    cursor: pointer;
    transition: 0.3s ease all;
    &:hover {
        transform: translateY(-10px);
    }
`;
export const Quantity = styled.h5`
    width: 50px;
    height: 20px;
    background: #94ff6e;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`;
export const QuantiyContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
export const Plus = styled.div`
    color: #94ff6e;
    cursor: pointer;
`;
export const Minus = styled.div`
    color: #94ff6e;
    cursor: pointer;
`;
export const Hero = styled.h2`
    font-size: 40px;
    margin: 8px 12px;
`;
export const Avatar = styled.img`
    border-radius: 50%;
    width: 125px;
    height: 125px;
    background-size: contain;
`;
export const SuperInfo = styled.div`
    h3 {
        margin: 8px 12px;
    }
    p {
        margin: 8px 12px;
    }
`;
export const Info = styled.div`
    display: flex;
`;
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
