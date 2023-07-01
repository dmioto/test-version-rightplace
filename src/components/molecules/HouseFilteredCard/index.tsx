import * as F from '../../../styles/fonts';
import * as S from './styles';


type HouseFilteredCardProps = {
    nameComplete:string;
    neiborhoud: string;
    price: string;
    fitting: number;
    listening: string;
    photo: string;
    houseDisplay: string
}

const HouseFilteredCard = ({ nameComplete, neiborhoud, price, fitting, listening, photo, houseDisplay }: HouseFilteredCardProps) => {
    return (
        <S.HouseFilteredContainer houseDisplay={houseDisplay}>
            <S.ContainerPhotoHouse>
                <img src={photo} alt="house to sell" />
            </S.ContainerPhotoHouse>

            <S.ContainerAsideRight houseDisplay={houseDisplay}>
                <F.TitleSmall>{nameComplete}</F.TitleSmall>
                <p className="neiborhoud">{neiborhoud}</p>
                <p className="price-flex"><span>$</span>{price}</p>
            </S.ContainerAsideRight>

            <S.ContainerAsideLeft houseDisplay={houseDisplay}>
                <p className="price-block"><span>$</span>{price}</p>

                <F.TitleSmall className="fitting">
                    Fitting: <span>{fitting}%</span>
                </F.TitleSmall>
                <p className="listening">{listening}</p>
            </S.ContainerAsideLeft>
        </S.HouseFilteredContainer>
    );
};

export default HouseFilteredCard;