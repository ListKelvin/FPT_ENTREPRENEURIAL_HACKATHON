import Logo from '../../assets/image/footer.png';
import { Wrapper, Foot, Img, Right, FirstCol } from './Footer.styled';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Wrapper>
            <Foot>
                <Img src={Logo}></Img>
                <Right>
                    <FirstCol>
                        <h5>HỖ TRỢ KHÁCH HÀNG</h5>
                        <ul>
                            <li>Trung tâm trợ giúp</li>
                            <li>An toàn mua bán</li>
                            <li>Quy định cần biết</li>
                            <li>Quy chế quyền riêng tư</li>
                            <li>Liên hệ hỗ trợ</li>
                        </ul>
                    </FirstCol>
                    <FirstCol>
                        <h5>VỀ 2NDGOODS</h5>
                        <ul>
                            <li>Giới thiệu</li>
                            <li>Truyền thông</li>
                            <li>Blog</li>
                        </ul>
                    </FirstCol>
                    <FirstCol>
                        <h5>THEO DÕI CHÚNG TÔI TRÊN</h5>
                        <ul>
                            <div>
                                <FacebookIcon />
                                <InstagramIcon />
                            </div>
                            <li>LIÊN HỆ</li>
                            <li>Hotline: 024 73081221</li>
                            <li>Email:baondse173024@fpt.edu.vn</li>
                        </ul>
                    </FirstCol>
                </Right>
            </Foot>
        </Wrapper>
    );
};

Footer.propTypes = {};

export default Footer;
