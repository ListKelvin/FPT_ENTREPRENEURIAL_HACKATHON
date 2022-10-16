import React from 'react';

import { Formik, Form } from 'formik';

import FormikControl from '../../components/Formik/FormikControl';
import { NavLink } from '../../components/NavBar/styled';
import { ButtonRegister } from '../../routes/SignUpPage/MuiStyled';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/system';

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
const VerifyEmail = () => {
    return (
        <Container
            maxWidth={false}
            sx={{
                padding: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#0f0f0f',
                width: '100%',
                flexDirection: 'column',
            }}
        >
            <Card
                sx={{ maxWidth: 445 }}
                style={{
                    width: '445px',
                    // height: '154px',
                    display: 'flex',
                    position: 'absolute',
                    top: '500px',
                    left: '30px',
                    alignItems: 'center',
                    // border: '1px solid rgba(0, 0, 0, 0.35)',
                    boxShadow: '5px 4px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '15px',
                    flexDirection: 'column',
                }}
            >
                <CardHeader
                    sx={{
                        background: '#1F1F1F',
                        width: '100%',
                        color: 'white',
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '24px',
                        lineHeight: '28px',
                    }}
                    title="Ghi Chú"
                >
                    <Typography sx={{ color: 'dark' }}>Áo Libé Workshop 200.000đ</Typography>
                </CardHeader>
                <CardContent sx={{ background: '#1F1F1F', width: '100%', height: '100%' }}>
                    <Box sx={style}>
                        <Form>
                            <FormikControl
                                control="MuiInput"
                                name="otb"
                                label="OTB"
                                variant="standard"
                            />
                            <ButtonRegister sx={{ width: '120px', height: '30px' }}>
                                <NavLink to="">submit</NavLink>
                            </ButtonRegister>
                        </Form>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
};

export default VerifyEmail;
