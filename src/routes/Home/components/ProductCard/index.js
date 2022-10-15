import { Link } from 'react-router-dom';

import Card from '../../../../components/Card';
import { Wrapper, Hero, CardWrapper } from '../styled';

function CardContainer({ items }) {
    return (
        <Wrapper>
            <Hero>
                <h1>Gợi ý cho bạn</h1>
                <p>Xem thêm</p>
            </Hero>
            <CardWrapper>
                {items.map((item) => {
                    return (
                        <div key={item.id}>
                            <Link to={`/detail/${item.id}`}>
                                <Card
                                    name={item.name}
                                    author={item.author}
                                    time={item.time}
                                    img={item.img}
                                    price={item.price}
                                    category={item.category}
                                >
                                    {' '}
                                </Card>
                            </Link>
                        </div>
                    );
                })}
            </CardWrapper>
        </Wrapper>
    );
}

export default CardContainer;
