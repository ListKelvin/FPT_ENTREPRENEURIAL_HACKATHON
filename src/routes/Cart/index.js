import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card';
import { toggleCart, removeItem, incrementItem, decrementItem } from '../../store/slice/cartSlice';
import { Wrapper } from './styled';

import { Container } from '@mui/system';

function Cart() {
    const { isCartOpen, cartItems } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const handleCloseCart = (close) => {
        dispatch(toggleCart(close));
    };

    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementItem(itemId));
    };
    console.log(cartItems.length);
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
                        <Card
                            key={item.id}
                            name={item.name}
                            author={item.author}
                            time={item.time}
                            img={item.img}
                            price={item.price}
                            category={item.category}
                        ></Card>
                    );
                })}
            </Wrapper>
        </Container>
    );
}

export default Cart;
