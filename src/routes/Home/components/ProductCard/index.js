import React from 'react';

import { useSelector } from 'react-redux';

import Card from '../../../../components/Card';
import { selectTitleHeader } from '../slice/selector';
import { Wrapper, Hero, CardWrapper } from '../styled';

function CardContainer({ items }) {
    const TitleHeader = useSelector(selectTitleHeader);
    return (
        <Wrapper>
            <Hero>
                <h1>{TitleHeader}</h1>
                <p>Xem thêm</p>
            </Hero>
            <CardWrapper>
                {items.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            name={item.name}
                            author={item.author}
                            time={item.time}
                            img={item.img}
                            price={item.price}
                            category={item.category}
                        >
                            {' '}
                        </Card>
                    );
                })}
            </CardWrapper>
        </Wrapper>
    );
}

export default CardContainer;
