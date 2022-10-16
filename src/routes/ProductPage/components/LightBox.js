/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';

import { useOnClickOutside } from '../../../utils/useOnClickOutside';
import {
    Container,
    Wrapper,
    ThumbContainer,
    BigImg,
    PrevButton,
    NextButton,
    CloseButton,
} from './styled';

export const Lightbox = ({ item, productData, setLightbox }) => {
    const [currentProductImage, setCurrentProductImage] = useState(0);
    const ref = useRef();

    useOnClickOutside(ref, () => setLightbox(false));

    return (
        <Container className="lightbox-overlay">
            <Wrapper className="lightbox flex" ref={ref}>
                <CloseButton>
                    <svg
                        onClick={() => setLightbox(false)}
                        className="close-icon"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                            fill="#ffffff"
                            fillRule="evenodd"
                        />
                    </svg>
                </CloseButton>
                <BigImg className="lightbox-image" src={item.img[1]} alt="" />
                <ThumbContainer className="thumbnail-wrapper flex">
                    <div className="thumbnail">
                        <img
                            onClick={() => setCurrentProductImage(0)}
                            className={currentProductImage === 0 ? 'active' : ''}
                            src={item.img[2]}
                            alt="thumbnail"
                        />
                    </div>

                    <div className="thumbnail">
                        <img
                            onClick={() => setCurrentProductImage(1)}
                            className={currentProductImage === 1 ? 'active' : ''}
                            src={item.img[2]}
                            alt="thumbnail"
                        />
                    </div>

                    <div className="thumbnail">
                        <img
                            onClick={() => setCurrentProductImage(2)}
                            className={currentProductImage === 2 ? 'active' : ''}
                            src={item.img[3]}
                            alt="thumbnail"
                        />
                    </div>

                    <div className="thumbnail">
                        <img
                            onClick={() => setCurrentProductImage(3)}
                            className={currentProductImage === 3 ? 'active' : ''}
                            src={item.img[4]}
                            alt="thumbnail"
                        />
                    </div>
                </ThumbContainer>
                <PrevButton
                    onClick={() =>
                        setCurrentProductImage((prevState) =>
                            prevState === 0 ? productData.length - 1 : prevState - 1
                        )
                    }
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
                </PrevButton>
                <NextButton
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
                </NextButton>
            </Wrapper>
        </Container>
    );
};
