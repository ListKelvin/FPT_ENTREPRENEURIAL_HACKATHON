import { Form } from 'formik';
import { up, down, between, only, createTheme } from 'styled-breakpoints';
import styled from 'styled-components';

import { Section } from '../../components/Container';

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

export const StyleSection = styled(Section)``;
