import { useState } from 'react';

import VietImg from '../../assets/order/Group 45.png';

import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Container, Box } from '@mui/system';

const OrderPage = () => {
    return (
        <div style={{ background: '#0f0f0f' }}>
            <Container
                maxWidth={false}
                sx={{
                    position: 'relative',
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
                    sx={{ maxWidth: 870 }}
                    style={{
                        width: '870px',
                        height: '254px',
                        display: 'flex',
                        position: 'absolute',
                        top: '250px',
                        left: '30px',
                        alignItems: 'center',
                        boxShadow: '5px 4px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: '15px',
                        flexDirection: 'column',
                    }}
                >
                    <CardHeader
                        sx={{
                            background: '#2E2E2E',
                            width: '100%',
                            color: 'white',
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '24px',
                            lineHeight: '28px',
                        }}
                        title="Phương thức thanh toán"
                    >
                        <Typography sx={{ color: 'dark' }}>Áo Libé Workshop 200.000đ</Typography>
                    </CardHeader>
                    <CardContent sx={{ background: '#1F1F1F', width: '100%', height: '100%' }}>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="vietcombank"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="vietcombank"
                                    control={<Radio color="success" />}
                                    label="Tài khoản ***892"
                                />
                                <FormControlLabel
                                    value="momo"
                                    control={<Radio color="success" />}
                                    label="Ví momo"
                                />
                                <FormControlLabel
                                    value="COD"
                                    control={<Radio color="success" />}
                                    label="Thanh toàn khi nhận hàng"
                                />
                            </RadioGroup>
                        </FormControl>
                    </CardContent>
                </Card>
                <Card
                    sx={{ maxWidth: 870 }}
                    style={{
                        width: '870px',
                        // height: '154px',
                        display: 'flex',
                        position: 'relative',
                        top: '560px',
                        left: '30px',
                        alignItems: 'center',

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
                        <Typography variant="body2" sx={{ color: 'white' }}>
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the
                            mussels, if you like.
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    sx={{ maxWidth: 445 }}
                    style={{
                        width: '445px',
                        height: '630px',
                        position: 'absolute',
                        top: '250px',
                        right: '120px',
                        display: 'flex',
                        alignItems: 'center',
                        background: '#1F1F1F',
                        boxShadow: '5px 4px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: '15px',
                        flexDirection: 'column',
                    }}
                >
                    <CardHeader
                        sx={{
                            background: '#2E2E2E',
                            width: '100%',
                            color: 'white',
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '24px',
                            lineHeight: '28px',
                        }}
                        title="Áo libé workshop"
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }
                    >
                        <Typography sx={{ color: 'dark' }}>Áo Libé Workshop 200.000đ</Typography>
                    </CardHeader>
                    <CardContent sx={{ background: '#1F1F1F', width: '100%', height: '100%' }}>
                        <Typography variant="body2" sx={{ color: 'white' }}>
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the
                            mussels, if you like.
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
};

export default OrderPage;
