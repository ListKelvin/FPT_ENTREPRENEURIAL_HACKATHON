import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    z-index: 99;
    width: 100vw;
    background: rgba(0, 0, 0, 0.38);
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Wrapper = styled.div`
    position: relative;
`;
export const ThumbContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    img {
        border-radius: 10px;
        width: 137.5px;
    }
`;
export const BigImg = styled.img`
    width: 550px;
`;
export const PrevButton = styled.button`
    border-radius: 50%;
    width: 56px;
    height: 56px;
    position: absolute;
    left: 0;
    top: 45%;
    &:hover {
        background: #94ff6e;
        color: white;
    }
`;
export const NextButton = styled(PrevButton)`
    transform: translateX(970%);
`;
export const CloseButton = styled.div`
    position: absolute;
    top: -5%;
    left: 100%;
    cursor: pointer;
`;
