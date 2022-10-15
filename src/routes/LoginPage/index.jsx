import { Formik } from 'formik';
import * as Yup from 'yup';

import { Section } from '../../components/Container';
// import { BaseButton, OutlinedButton } from '../../Component/Button.styles';
import FormikControl from '../../components/Formik/FormikControl';
import LeftContent from './components/LeftContent';
// import { LinkStyle } from '../sign-up/Components/SignUpForm.styles';
import RightContent from './components/RightContent';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const SignInComponent = () => {
    const initialValues = {
        phoneOrEmail: 'isEmail',
        email: '',
        password: '',
    };

    const options = [
        { key: 'Email', value: 'isEmail' },
        { key: 'Telephone', value: 'isTelephone' },
    ];
    const validationSchema = Yup.object({
        phoneOrEmail: Yup.string().required('Required'),
        email: Yup.string().when('phoneOrEmail', {
            is: 'isEmail',
            then: Yup.string()
                .required('email cannot be empty')
                .matches(
                    /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
                    'Your email must match the following formats'
                ),
            otherwise: Yup.string()
                .required('phonenumber cannot be empty')
                .matches(/^(01|03|05|07|08|09)+([0-9]{8})\b/, 'Your phone does not right'),
        }),
        password: Yup.string()
            .required('Required')
            .min(8, 'Your password is too short.')
            .matches(
                /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                'Password must One Uppercase, One Lowercase, One Number and one special case Character.'
            ),
    });
    const theme = createTheme();
    const onSubmit = (values) => {
        console.log('Form data', values);
    };
    // <CssBaseline />
    return (
        <ThemeProvider theme={theme}>
            <Section>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <LeftContent />
                    <RightContent />
                </Grid>
            </Section>
        </ThemeProvider>
    );
};

export default SignInComponent;
