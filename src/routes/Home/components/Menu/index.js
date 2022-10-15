import React from 'react';

import { Container, H1 } from '../styled';
import Category from './components/Category';

function Menu({ filterItems }) {
    return (
        <Container>
            <H1>khám phá danh mục</H1>
            <Category filterItems={filterItems} />
        </Container>
    );
}

export default Menu;
