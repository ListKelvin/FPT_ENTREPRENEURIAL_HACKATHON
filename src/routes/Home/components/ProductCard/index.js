import Card from '../../../../components/Card';
import { NavLink } from '../../../../components/NavBar/styled';
import { Wrapper, Hero, CardWrapper } from '../styled';

function CardContainer({ items }) {
    console.log(items);
    return (
        <Wrapper>
            <Hero>
                <h1>Gợi ý cho bạn</h1>
                <p>Xem thêm</p>
            </Hero>
            <CardWrapper>
                {items.map((item) => {
                    return (
                        // /
                        //
                        //
                        //
                        //
                        <div key={item.id}>
                            <NavLink to={`/detail/${item.id}`}>
                                <Card
                                    name={item.name}
                                    author={item.author}
                                    time={item.time}
                                    img={item.img[0]}
                                    price={item.price}
                                    category={item.category}
                                />
                            </NavLink>
                        </div>
                    );
                })}
            </CardWrapper>
        </Wrapper>
    );
}

export default CardContainer;
