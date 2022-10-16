import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';

import { BaseButton } from '../../../components/Button/Button.styled';
// import { post } from '../../utils/ApiCaller';
import FormikControl from '../../../components/Formik/FormikControl';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

const FormUpdate = () => {
    const navigate = useNavigate();
    const initialValues = {
        dateOfBirth: '',
        gender: '',
        avatar: '',
        phone: '',
        address: '',
        name: '',
        username: '',
    };
    const optionGender = [
        { key: 'MALE', value: 'MALE' },
        { key: 'FEMALE', value: 'FEMALE' },
        { key: 'OTHERS', value: 'OTHERS' },
    ];
    const ValidationSchema = Yup.object({
        name: Yup.string().required('required'),
        email: Yup.string()
            .required('email cannot be empty')
            .matches(/^[\w-]+@fpt.edu.vn$/, 'Your email must match the following formats'),
        accpetChallenge: Yup.boolean().oneOf([true], 'Please accept the terms of service'),
        password: Yup.string()
            .required('Required')
            .min(8, 'Your password is too short.')
            .matches(
                /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                'Password must One Uppercase, One Lowercase, One Number and one special case Character.'
            ),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), ''], 'Passwords must match')
            .required('Required'),
    });

    const onSubmit = (values) => {
        // let data2 = {};
        // data2.name = values.name;
        // data2.email = values.email;
        // data2.password = values.password;
        // data2.confirmPassword = values.confirmPassword;
        // const responses = post('/account/sign-up', data2, {}, {})
        //     .then((data) => {
        //         console.log(data.message);
        //         navigate('/home');
        //     })
        //     .catch((err) => console.log(err.message));
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
                            Chỉnh sửa thông tin
                        </Typography>

                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6}>
                                <FormikControl
                                    control="MuiInput"
                                    sx={{
                                        width: { xs: '300px', sm: '200px' },
                                        borderWidth: '2px',
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    label="Tên"
                                    name="name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormikControl
                                    control="MuiInput"
                                    sx={{
                                        width: { xs: '300px', sm: '200px' },

                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    label="Tên người dùng"
                                    name="username"
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
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormikControl
                                    control="MuiInput"
                                    sx={{
                                        width: { xs: '350px' },
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    label="phone"
                                    name="phone"
                                    variant="standard"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormikControl
                                    control="MuiInput"
                                    sx={{
                                        width: { xs: '350px' },
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    label="Giới tính"
                                    name="gender"
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
                                    label="Địa chỉ"
                                    name="address"
                                    variant="standard"
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
                            <BaseButton type="submit" sx={{ width: '200px' }}>
                                save
                            </BaseButton>
                        </Box>
                    </FormContainer>
                );
            }}
        </Formik>
    );
};

export default FormUpdate;

const FormContainer = styled(Form)`
    width: 550px;
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
