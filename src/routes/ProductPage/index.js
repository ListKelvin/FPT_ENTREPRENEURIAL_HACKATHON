/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addItem } from '../../store/slice/cartSlice';
import { items } from '../Home/data';
import { productData } from './ProductData';
import { Lightbox } from './components/LightBox';
import {
    Container,
    Wrapper,
    BigImg,
    ThumbContainer,
    Section,
    Description,
    Price,
    ButtonContainer,
    AddButton,
    BuyButton,
    Quantity,
    QuantiyContainer,
    Plus,
    Minus,
    Hero,
    Info,
    SuperInfo,
    Avatar,
    Div,
} from './styled';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Product = ({ productQuantity, setProductQuantity, setCartProductQuantity }) => {
    const [currentProductImage, setCurrentProductImage] = useState(0);
    const [lightbox, setLightbox] = useState(false);
    const [quanity, setQuanity] = useState(0);
    const avatar =
        'https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/298917782_2850144668625493_4934864891793808158_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iUWQJwob5wMAX9XR1lo&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT-b15etkZh7oEPP0Ekh1T-7vfTu5npBtuBpOY2HXSbu0w&oe=63502348';
    const handleAddToCart = () => {
        dispatch(addItem(items[2]));
    };
    const dispatch = useDispatch();
    const { id } = useParams();
    const handleIncrease = () => {
        if (quanity < 99) {
            setQuanity((quanity) => (quanity += 1));
        }
    };
    const handleDecrease = () => {
        if (quanity > 0) {
            setQuanity((quanity) => (quanity -= 1));
        }
    };

    return (
        <Container>
            <Wrapper>
                <Section>
                    <div>
                        <BigImg
                            onClick={() => window.innerWidth > 768 && setLightbox(true)}
                            src={productData[currentProductImage].png}
                            alt=""
                        />
                        <div>
                            <ThumbContainer>
                                <div>
                                    <img
                                        onClick={() => setCurrentProductImage(0)}
                                        className={currentProductImage === 0 ? 'active' : ''}
                                        src={productData[0].thumbnail}
                                        alt="thumbnail"
                                    />
                                </div>

                                <div>
                                    <img
                                        onClick={() => setCurrentProductImage(1)}
                                        className={currentProductImage === 1 ? 'active' : ''}
                                        src={productData[1].thumbnail}
                                        alt="thumbnail"
                                    />
                                </div>

                                <div>
                                    <img
                                        onClick={() => setCurrentProductImage(2)}
                                        className={currentProductImage === 2 ? 'active' : ''}
                                        src={productData[2].thumbnail}
                                        alt="thumbnail"
                                    />
                                </div>

                                <div>
                                    <img
                                        onClick={() => setCurrentProductImage(3)}
                                        className={currentProductImage === 3 ? 'active' : ''}
                                        src={productData[3].thumbnail}
                                        alt="thumbnail"
                                    />
                                </div>
                            </ThumbContainer>
                        </div>

                        {window.innerWidth <= 768 && (
                            <>
                                <button
                                    onClick={() =>
                                        setCurrentProductImage((prevState) =>
                                            prevState === 0 ? productData.length - 1 : prevState - 1
                                        )
                                    }
                                    className="lightbox-control control-prev"
                                >
                                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11 1 3 9l8 8"
                                            stroke="#1D2026"
                                            strokeWidth="3"
                                            fill="none"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                <button
                                    onClick={() =>
                                        setCurrentProductImage((prevState) =>
                                            prevState === productData.length - 1 ? 0 : prevState + 1
                                        )
                                    }
                                    className="lightbox-control control-next"
                                >
                                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m2 1 8 8-8 8"
                                            stroke="#1D2026"
                                            strokeWidth="3"
                                            fill="none"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>
                    <Div>
                        <Description className="product-description flow">
                            <h1>Áo nữ Libé Workshop</h1>
                            <Price>200.000 đ</Price>
                            <p>
                                These low-profile sneakers are your perfect casual wear companion.
                                Featuring a durable rubber outer sole, they’ll withstand everything
                                the weather can offer.
                            </p>
                            <QuantiyContainer>
                                <Minus onClick={handleDecrease}>
                                    <RemoveIcon />
                                </Minus>
                                <Quantity>{quanity}</Quantity>
                                <Plus onClick={handleIncrease}>
                                    <AddIcon />
                                </Plus>
                            </QuantiyContainer>
                            <ButtonContainer>
                                <AddButton>Thêm vào giỏ hàng</AddButton>
                                <BuyButton onClick={handleAddToCart}>MUA NGAY</BuyButton>
                            </ButtonContainer>
                        </Description>
                        <Description>
                            <Hero>Về người bán</Hero>
                            <Info>
                                <Avatar src={avatar}></Avatar>
                                <SuperInfo>
                                    <h3>Khánh Linh</h3>
                                    <p>Let me illuminate your ideas through creations</p>
                                    <BuyButton>Liên hệ</BuyButton>
                                </SuperInfo>
                            </Info>
                        </Description>
                    </Div>
                </Section>

                {lightbox && <Lightbox productData={productData} setLightbox={setLightbox} />}
            </Wrapper>
        </Container>
    );
};
export default Product;
