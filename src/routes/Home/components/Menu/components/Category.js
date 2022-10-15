import cate_1 from '../../../../../assets/image/category_1.png';
import cate_2 from '../../../../../assets/image/category_2.png';
import cate_3 from '../../../../../assets/image/category_3.png';
import cate_4 from '../../../../../assets/image/category_4.png';
import cate_5 from '../../../../../assets/image/category_5.png';
import cate_6 from '../../../../../assets/image/category_6.png';
import { CategoryContainer } from '../../styled';
import Item from './Item';

function Category({ filterItems }) {
    return (
        <CategoryContainer>
            <Item img={cate_1} name="Đồ điện tử" filterItems={filterItems}></Item>
            <Item img={cate_2} name="Đồ gia dụng" filterItems={filterItems}></Item>
            <Item img={cate_3} name="Thời Trang" filterItems={filterItems}></Item>
            <Item img={cate_4} name="Làm Đẹp" filterItems={filterItems}></Item>
            <Item img={cate_5} name="Văn phòng phẩm" filterItems={filterItems}></Item>
            <Item img={cate_6} name="Thể thao" filterItems={filterItems}></Item>
        </CategoryContainer>
    );
}

export default Category;
