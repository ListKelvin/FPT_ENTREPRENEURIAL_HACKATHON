import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { logIn } from '../../../actions/AuthActions';
import { BaseButton } from '../../../components/Button/Button.styled';
import FormikControl from '../../../components/Formik/FormikControl';
import { post } from '../../../utils/ApiCaller';
import localStorageUtils from '../../../utils/LocalStorageUtils';
import { FormContainer } from '../styles';

import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const RightContent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = (values) => {
        const responsess = post('/auth/login', values, {}, {})
            .then((data) => {
                localStorageUtils.setItem('token', data.data.token);
                navigate('/home');
                console.log(data.data.token);
            })
            .catch((err) => console.error(err));
        console.log('Form data', values);
    };
    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .required('email cannot be empty')
            .matches(/^[\w-]+@fpt.edu.vn$/, 'Your email must match the following formats'),
        password: Yup.string()
            .required('Required')
            .min(8, 'Your password is too short.')
            .matches(
                /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                'Password must One Uppercase, One Lowercase, One Number and one special case Character.'
            ),
    });
    return (
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
                                variant="outlined"
                            />
                            <FormikControl
                                control="MuiInput"
                                type="password"
                                label="Password"
                                name="password"
                                variant="outlined"
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
