import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import bg from '../../assets/image/bg.png';
import { addItem } from '../../store/slice/cartSlice';
import productApi from '../../utils/productApi';
import { Img } from './Style';
import Menu from './components/Menu/index';
import CardContainer from './components/ProductCard';

import { Container } from '@mui/system';

const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAllProduct();
    }, []);
    const getAllProduct = async () => {
        const path = await productApi.getAllProduct();
        setData(path.data);
    };
    const dispatch = useDispatch();
    const [menuItems, setMenuItems] = useState(data);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(data);
            return;
        }
        const newItems = data.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <Container
            maxWidth={false}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#0f0f0f',
                width: '100%',
                flexDirection: 'column',
            }}
        >
            <Img src={bg}></Img>
            <Menu filterItems={filterItems}></Menu>
            <CardContainer items={menuItems}></CardContainer>
        </Container>
    );
};

export default App;
