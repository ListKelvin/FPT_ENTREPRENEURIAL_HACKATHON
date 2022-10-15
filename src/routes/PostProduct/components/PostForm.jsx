import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';

import { BaseButton } from '../../../components/Button/Button.styled';
import FormikControl from '../../../components/Formik/FormikControl';

// import { post } from '../../utils/ApiCaller';
// import * as Yup from 'yup';
// import { ValidationSchema } from '../Schema/validation';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

const PostForm = () => {
    const styles = (theme) => ({
        notchedOutline: {
            borderWidth: '1px',
            borderColor: 'yellow !important',
        },
    });
    const ValidationSchema = Yup.object({
        address: Yup.string().required('required'),
        category: Yup.string().required('required'),
        title: Yup.string().required('required'),
        price: Yup.string().required('required'),
        accpetcharity: Yup.boolean().oneOf([true], 'Please accept the terms of service'),
    });
    const navigate = useNavigate();
    const initialValues = {
        address: '',
        category: '',
        title: '',
        price: '',
        acceptcharity: false,
    };
    const optionSemester = [
        { key: 'LUK1', value: 'LUK1' },
        { key: 'LUK2', value: 'LUK2' },
        { key: 'LUK3', value: 'LUK3' },
        { key: 'LUK4', value: 'LUK4' },
        { key: 'TRS4', value: 'TRS4' },
        { key: 'TRS5', value: 'TRS5' },
        { key: 'TRS6', value: 'TRS6' },
        { key: 'CN1', value: 'CN1' },
        { key: 'CN2', value: 'CN2' },
        { key: 'CN3', value: 'CN3' },
    ];
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
                                fontSize: '30px',
                                lineHeight: '35px',
                                color: '#94FF6E',
                                marginBottom: '10px',
                            }}
                        >
                            Đăng Tin
                        </Typography>

                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <FormikControl
                                    control="select"
                                    sx={{
                                        width: { xs: '350px' },
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    options={optionSemester}
                                    label="Danh Mục Tin Đăng"
                                    name="category"
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
                                    label="Tiêu đề"
                                    name="title"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        fontSize: '20px',
                                        lineHeight: '24px',
                                        color: 'white',
                                        // marginBottom: '10px',
                                    }}
                                >
                                    Thông tin chi tiết
                                </Typography>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '19px',
                                            color: '#888888',
                                        }}
                                    >
                                        Tình trạng sử dụng
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '19px',
                                            color: '#888888',
                                        }}
                                    >
                                        Giá
                                    </Typography>
                                    <FormikControl
                                        control="MuiInput"
                                        sx={{
                                            width: { xs: '350px' },
                                            height: '20px',
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '10px',
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'white',
                                                },
                                            },
                                        }}
                                        label="Giá"
                                        name="price"
                                        variant="outlined"
                                    />
                                </Box>
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
                                    label="Đia chỉ"
                                    name="address"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormikControl
                                    control="checkbox"
                                    name="accpetCharity"
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
                            <BaseButton type="submit" sx={{ width: '200px' }}>
                                Register Now
                            </BaseButton>
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography>đã có tài khoản rồi đây</Typography>
                                <BaseButton sx={{ width: '120px', height: '30px' }}>đây</BaseButton>
                            </Box>
                        </Box>
                    </FormContainer>
                );
            }}
        </Formik>
    );
};

export default PostForm;

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
