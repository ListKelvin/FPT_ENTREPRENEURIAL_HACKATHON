import React from 'react';

// import { useDispatch } from 'react-redux';
// import { actions } from '../../slice/index';
import { Box } from '../../styled';

function Item({ img, name, filterItems }) {
    // const dispatch = useDispatch;
    const handleClick = () => {
        filterItems(name);
        // dispatch(actions.changeTitle(name));
    };
    return (
        <Box onClick={handleClick}>
            <img src={img} className="noi" alt="" />
            <h5>{name}</h5>
        </Box>
    );
}

export default Item;
