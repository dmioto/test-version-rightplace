import Hero from '../../../assets/hero.jpg';
import SelectMain from '../../atomos/SelectMain';
import * as S from './styles';

const SearchMain = () => {
    return (
        <S.ContainerSearchMain img={Hero}>
            <S.FormControlMain>           
                <SelectMain />
            </S.FormControlMain>
        </S.ContainerSearchMain>
    );
};

export default SearchMain;