import { TitleMedium, TitleStrong } from '../../../styles/fonts';
import SearchMain from '../../organisms/SearchMain';
import * as S from './styles';

const Main = () => {
    return (
        <S.ContainerMain>
            <S.ContainerTitle>
                <TitleStrong>In deep location intelligence</TitleStrong>
                <TitleMedium>Find a home in the best place for you</TitleMedium>
            </S.ContainerTitle>
            <SearchMain />
            
            
        </S.ContainerMain>
    );
};

export default Main;