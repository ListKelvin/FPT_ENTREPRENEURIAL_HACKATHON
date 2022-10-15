import { Form } from 'formik';
import styled from 'styled-components';

export const FormContainer = styled(Form)`
    display: flex;
    /* width: 100vw;

    height: 100vh; */
    flex-direction: column;
    justify-content: center;
    background: transparent;
    align-items: flex-start;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
