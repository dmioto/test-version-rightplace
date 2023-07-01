import { Link } from 'react-router-dom';
import { PoppingsExtraLight } from '../../../styles/fonts';
import * as S from './styles';

const Footer = () => {
    return (
        <S.FooterContainer>
            <Link to="/">
                <PoppingsExtraLight>Terms and Conditions</PoppingsExtraLight>
                
            </Link>
            <p>|</p>
            <Link to="/">
                <PoppingsExtraLight>Privacy Policy</PoppingsExtraLight>
            </Link>
        </S.FooterContainer>
    );
};

export default Footer;