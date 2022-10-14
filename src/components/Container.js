import styled from 'styled-components';

import px2vw from '../utils/px2vw';

export const Container = styled.section`
    max-width: 1100px;
    width: 100%;
    height: ${px2vw(550)};
    display: flex;
    justify-content: space-between;
    margin: 64px 0;
`;
