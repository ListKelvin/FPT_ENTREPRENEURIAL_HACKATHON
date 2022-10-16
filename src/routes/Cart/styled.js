import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    color: white;
    display: flex;
    margin-bottom: 32px;
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
`;
export const OrderButton = styled.div`
    width: 200px;
    height: 50px;
    background: blue;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 15px;
`;
export const H5 = styled.h5`
    color: white;
    font-size: 32px;
`;
