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
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';

const PostForm = () => {
    const styles = (theme) => ({
        notchedOutline: {
            borderWidth: '1px',
            borderColor: 'yellow !important',
        },
    });
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
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
        { key: 'Đồ điện tử', value: 'Đồ điện tử' },
        { key: 'Đồ gia dụng', value: 'Đồ gia dụng' },
        { key: 'Thời Trang', value: 'Thời Trang' },
        { key: 'Làm đẹp', value: 'Làm đẹp' },
        { key: 'Văn Phòng Phẩm', value: 'Văn Phòng Phẩm' },
        { key: 'Thể Thao', value: 'Thể Thao' },
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
                                        borderBottom: 'solid white 1px',
                                        width: { xs: '350px' },
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                        '&	.MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'white',
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
                                        marginBottom: '10px',
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
                                            marginBottom: '18px',
                                        }}
                                    >
                                        Tình trạng sử dụng
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        sx={{ marginBottom: '18px' }}
                                    >
                                        <Chip label="Đã sử dụng" color="success" clickable={true} />
                                        <Chip
                                            clickable={true}
                                            onclick={handleClick}
                                            label="Mới"
                                            variant="outlined"
                                            color="success"
                                        />
                                    </Stack>
                                </Box>
                                <Box sx={{ marginBottom: '18px' }}>
                                    <FormikControl
                                        control="MuiInput"
                                        sx={{
                                            width: { xs: '350px' },
                                            height: '20px',
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '10px',
                                                '& fieldset': {
                                                    borderColor: 'white',
                                                },
                                                '&:hover fieldset': {
                                                    borderWidth: '2px',
                                                    borderColor: 'white',
                                                },
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
                                            '&::before': {
                                                borderBottom: '1px solid white',
                                            },
                                            '& fieldset': {
                                                borderColor: 'white',
                                            },
                                            '&:hover fieldset': {
                                                borderWidth: '2px',
                                                borderColor: 'white',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'white',
                                            },
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
