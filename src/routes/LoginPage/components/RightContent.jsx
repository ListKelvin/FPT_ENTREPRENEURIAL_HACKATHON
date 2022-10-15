import { Formik } from 'formik';
import * as Yup from 'yup';

import { BaseButton } from '../../../components/Button/Button.styled';
import FormikControl from '../../../components/Formik/FormikControl';
import { FormContainer } from '../styles';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';

const RightContent = () => {
    const onSubmit = (values) => {
        console.log('Form data', values);
    };
    const initialValues = {
        email: '',
        password: '',
    };

    const options = [
        { key: 'Email', value: 'isEmail' },
        { key: 'Telephone', value: 'isTelephone' },
    ];
    const validationSchema = Yup.object({
        email: Yup.string()
            .required('email cannot be empty')
            .matches(
                /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
                'Your email must match the following formats'
            ),
        password: Yup.string()
            .required('Required')
            .min(8, 'Your password is too short.')
            .matches(
                /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                'Password must One Uppercase, One Lowercase, One Number and one special case Character.'
            ),
    });
    return (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    px: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {(formik) => {
                        return (
                            <FormContainer>
                                <Typography
                                    sx={{
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '19px',
                                        color: 'white',
                                    }}
                                >
                                    Welcome Back
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        fontSize: '30px',
                                        lineHeight: '35px',
                                        color: '#94FF6E',
                                        marginBottom: '10px',
                                    }}
                                >
                                    Đăng Nhập Ngay
                                </Typography>
                                <FormikControl
                                    // control="input"
                                    control="MuiInput"
                                    label="Email"
                                    name="email"
                                />
                                <FormikControl
                                    control="MuiInput"
                                    type="password"
                                    label="Password"
                                    name="password"
                                />
                                <BaseButton
                                    variant="contained"
                                    type="submit"
                                    disabled={!formik.isValid}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '16px',
                                            lineHeight: '19px',
                                        }}
                                    >
                                        Đăng nhập
                                    </Typography>
                                </BaseButton>
                            </FormContainer>
                        );
                    }}
                </Formik>
            </Box>
        </Grid>
    );
};

export default RightContent;

// //{' '}
// <Grid container>
//     //{' '}
//     <Grid item xs>
//         //{' '}
//         <Link href="#" variant="body2">
//             // Forgot password? //{' '}
//         </Link>
//         //{' '}
//     </Grid>
//     //{' '}
//     <Grid item>
//         //{' '}
//         <Link href="#" variant="body2">
//             // {"Don't have an account? Sign Up"}
//             //{' '}
//         </Link>
//         //{' '}
//     </Grid>
//     //{' '}
// </Grid>