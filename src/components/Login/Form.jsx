import { Formik, Form } from 'formik';
import styled from 'styled-components';

import FormikControl from '../Formik/FormikControl';
// import * as Yup from 'yup';
import { ValidationSchema } from '../Schema/validation';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const FormRegister = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        Major: '',
        rollNumber: '',
        currentSemester: '',
        accpetChallenge: false,
        phoneNumber: '',
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
    const optionsMajor = [
        { key: 'Software Engineering', value: 'Software Engineering' },
        { key: 'Artificial Intelligence', value: 'Artificial Intelligence' },
        { key: 'Information Assurance', value: 'Information Assurance' },
        { key: 'Information Systems', value: 'Information Systems' },
        { key: 'IoT (Internet of Things)', value: 'IoT (Internet of Things)' },
        { key: 'Digital Art Design', value: 'Digital Art Design' },
        { key: 'International Business', value: 'International Business' },
        { key: 'Business Administration', value: 'Business Administration' },
        { key: 'Multimedia', value: 'Multimedia' },
        { key: 'Digital Marketing', value: 'Digital Marketing' },
        {
            key: 'Tourism & Travel Service Management',
            value: 'Tourism & Travel Service Management',
        },
        { key: 'Hotel Management', value: 'Hotel Management' },
        { key: 'English Studies', value: 'English Studies' },
        { key: 'Multimedia', value: 'Japanese language' },
        { key: 'Korean language', value: 'Korean language' },
    ];

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
                                fontFamily: 'GT Walsheim Pro Black',
                                fontSize: { xs: '50px', sm: '60px' },
                                lineHeight: '65px',
                            }}
                        >
                            Registration Form
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '150%',
                                color: '#6B7280',
                                marginBottom: '10px',
                            }}
                        >
                            Fill in all the information to receive challenges from us!
                        </Typography>
                        <Grid container spacing={2}>
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
                                    label="First Name"
                                    name="firstName"
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
                                    label="Last Name"
                                    name="lastName"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormikControl
                                    control="Select"
                                    label="Major"
                                    sx={{
                                        width: { xs: '300px', sm: '433px' },
                                        borderRadius: '10px',
                                    }}
                                    options={optionsMajor}
                                    name="Major"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormikControl
                                    control="MuiInput"
                                    label="Roll Number"
                                    sx={{
                                        width: { xs: '300px', sm: '200px' },

                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    placeholder="SE180000"
                                    name="rollNumber"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormikControl
                                    control="Select"
                                    sx={{
                                        width: { xs: '300px', sm: '200px' },
                                        borderRadius: '10px',
                                    }}
                                    options={optionSemester}
                                    label="Current Semester"
                                    name="currentSemester"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormikControl
                                    control="MuiInput"
                                    sx={{
                                        width: { xs: '300px', sm: '433px', lg: '433px' },
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    label="Phone Number"
                                    name="phoneNumber"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormikControl
                                    control="checkbox"
                                    name="accpetChallenge"
                                    label="I accept to take the challenges of F-Code"
                                />
                            </Grid>
                        </Grid>
                        <button type="submit">Register Now</button>
                    </FormContainer>
                );
            }}
        </Formik>
    );
};

export default FormRegister;

const FormContainer = styled(Form)`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

/* ${down('md')} {
    max-width: 450px;
}
${down('sm')} {
    max-width: 300px;
} */
