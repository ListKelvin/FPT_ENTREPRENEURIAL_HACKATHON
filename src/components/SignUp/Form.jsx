import { Formik, Form } from 'formik';
import styled from 'styled-components';

import { ButtonRegister } from '../../routes/SignUpPage/MuiStyled';
import FormikControl from '../Formik/FormikControl';
// import * as Yup from 'yup';
import { ValidationSchema } from '../Schema/validation';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

const FormRegister = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        accpetPolicy: false,
    };

    const onSubmit = (values) => {
        console.log('Form data', values);
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={ValidationSchema}
        >
            {() => {
                return (
                    <FormContainer data-aos="fade-right">
                        <Typography
                            sx={{
                                fontFamily: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '32px',
                                lineHeight: '38px',
                                color: '#000000',
                            }}
                        >
                            Đăng ký tài khoản
                        </Typography>

                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <FormikControl
                                    control="MuiInput"
                                    sx={{
                                        width: { xs: '350px' },
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    label="Họ và tên"
                                    name="name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormikControl
                                    control="MuiInput"
                                    sx={{
                                        width: { xs: '350px' },
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    label="Email"
                                    name="email"
                                    variant="standard"
                                />
                            </Grid>{' '}
                            <Grid item xs={12}>
                                <FormikControl
                                    control="MuiInput"
                                    sx={{
                                        width: { xs: '350px' },
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    label="Mật khẩu"
                                    name="password"
                                    type="password"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormikControl
                                    control="MuiInput"
                                    sx={{
                                        width: { xs: '350px' },
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    type="password"
                                    label="Nhập lại mật khẩu"
                                    name="confirmPassword"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormikControl
                                    control="checkbox"
                                    name="accpetChallenge"
                                    label="Tôi đồng ý với tất cả điều khoản"
                                />
                            </Grid>
                        </Grid>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                width: '100%',
                                gap: '15px',
                            }}
                        >
                            <ButtonRegister type="submit" sx={{ width: '200px' }}>
                                Register Now
                            </ButtonRegister>
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography>đã có tài khoản rồi đây</Typography>
                                <ButtonRegister sx={{ width: '120px', height: '30px' }}>
                                    đây
                                </ButtonRegister>
                            </Box>
                        </Box>
                    </FormContainer>
                );
            }}
        </Formik>
    );
};

export default FormRegister;

const FormContainer = styled(Form)`
    width: 350px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
`;

/* ${down('md')} {
    max-width: 450px;
}
${down('sm')} {
    max-width: 300px;
} */
