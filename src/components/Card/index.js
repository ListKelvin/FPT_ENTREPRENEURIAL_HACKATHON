import React from 'react';

import {
    ProductCard,
    Hero,
    Author,
    Time,
    Img,
    Category,
    ProductName,
    ProductPrice,
} from './styled';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Card({ author, time, img, category, name, price }) {
    return (
        <ProductCard>
            <Hero>
                <Author>
                    <PersonOutlineIcon />
                    {author}
                </Author>
                <Time>{time}</Time>
            </Hero>
            <Img src={img} />
            <Category>{category}</Category>
            <ProductName>{name}</ProductName>
            <ProductPrice>{price}</ProductPrice>
        </ProductCard>
    );
}

export default Card;
