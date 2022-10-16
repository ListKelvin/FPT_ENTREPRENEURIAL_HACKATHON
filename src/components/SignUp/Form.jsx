import { useState } from 'react';

import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ButtonRegister } from '../../routes/SignUpPage/MuiStyled';
import { post } from '../../utils/ApiCaller';
import FormikControl from '../Formik/FormikControl';
import { NavLink } from '../NavBar/styled';
// import * as Yup from 'yup';
import { ValidationSchema } from '../Schema/validation';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#0F0F0F',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const FormRegister = () => {
    const navigate = useNavigate();
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        accpetPolicy: false,
        otp: '',
    };

    const onSubmit = (values) => {
        let data2 = {};
        data2.name = values.name;
        data2.email = values.email;
        data2.password = values.password;
        data2.confirmPassword = values.confirmPassword;

        const responses = post('/account/sign-up', data2, {}, {})
            .then((data) => {
                console.log(data.message);
                navigate('/home');
            })
            .catch((err) => console.log(err.message));
        console.log('Form data', values);
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                                color: '#94FF6E',
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
                            <ButtonRegister
                                onClick={handleOpen}
                                type="submit"
                                sx={{ width: '200px' }}
                            >
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
                                    <NavLink to="/login">đây</NavLink>
                                </ButtonRegister>
                            </Box>
                        </Box>
                        <Modal
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="keep-mounted-modal-title"
                            aria-describedby="keep-mounted-modal-description"
                        >
                            <Box sx={style}>
                                <Form>
                                    <FormikControl
                                        control="MuiInput"
                                        name="otp"
                                        label="OTP"
                                        variant="standard"
                                    />
                                    <ButtonRegister sx={{ width: '120px', height: '30px' }}>
                                        <NavLink to="">submit</NavLink>
                                    </ButtonRegister>
                                </Form>
                            </Box>
                        </Modal>
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
const VerifyContainer = styled(Form)``;

/* ${down('md')} {
    max-width: 450px;
}
${down('sm')} {
    max-width: 300px;
} */
