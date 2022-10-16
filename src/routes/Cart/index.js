import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card';
import { Button } from '../../components/NavBar/styled';
import { toastSuccess } from '../../components/ToastNotification';
import { toggleCart, removeItem, incrementItem, decrementItem } from '../../store/slice/cartSlice';
import LocalStorageUtils from '../../utils/LocalStorageUtils';
import { Wrapper, QuantiyContainer, Minus, Plus, Quantity, Div, OrderButton, H5 } from './styled';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Container } from '@mui/system';

function Cart() {
    const { isCartOpen, cartItems } = useSelector((state) => state.cart);
    console.log(cartItems);
    const dispatch = useDispatch();
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        total += cartItems[i].price * cartItems[i].quantity;
    }
    LocalStorageUtils.setItem('total', total);
    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementItem(itemId));
    };
    return (
        <Container
            maxWidth={false}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#0f0f0f',
                minHeight: '110vh',
                width: '100%',
                flexDirection: 'column',
            }}
        >
            <Wrapper>
                {cartItems.map((item) => {
                    return (
                        <Div key={item.id}>
                            <Card
                                name={item.name}
                                author={item.author}
                                time={item.time}
                                img={item.img}
                                price={item.price}
                                category={item.category}
                            ></Card>
                            <QuantiyContainer>
                                <Minus onClick={() => handleDecrement(item.id)}>
                                    <RemoveIcon />
                                </Minus>
                                <Quantity>{item.quantity}</Quantity>
                                <Plus onClick={() => handleIncrement(item.id)}>
                                    <AddIcon />
                                </Plus>
                            </QuantiyContainer>
                        </Div>
                    );
                })}
            </Wrapper>
            <H5>{`${total}.đ`}</H5>
            <Button onClick={() => toastSuccess('Order Succesfully!!')}>Order</Button>
        </Container>
    );
}

export default Cart;
