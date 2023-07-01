import * as S from './styles';
import HouseFilteredCard from '../../molecules/HouseFilteredCard';
import { housesMock } from './mocks.js';
import React from 'react';
import FilterCharacteristics from '../../molecules/FilterCharacteristics/index.js';
import { TitleStrong } from '../../../styles/fonts.js';
import theme from '../../../styles/theme.js';
import ButtonGenarete from '../../atomos/ButtonGenarete/index.js';

type CharacteristicsDialogProps = {
  onClickGenarete: () => void;
};

const CharacteristicssDialog = ({
  onClickGenarete,
}: CharacteristicsDialogProps) => {
  const [houseDisplay, setHouseDisplay] = React.useState('flex');
  return (
    <S.CharacteristicsContainer>
      <S.HouseHeader>
        <TitleStrong color={theme.colors.purple['500']}>
          Properties in your desired location
        </TitleStrong>
        <ButtonGenarete
          onClickNext={() => onClickGenarete()}
          text="Re generate"
        />
      </S.HouseHeader>

      <FilterCharacteristics setHouseDisplay={setHouseDisplay} />

      <S.HouseCardsWrapper display={houseDisplay}>
        {housesMock.map((house, index) => (
          <HouseFilteredCard
            key={index}
            fitting={house.fitting}
            neiborhoud={house.neiborhoud}
            price={house.price}
            listening={house.listening}
            nameComplete={house.nameComplete}
            photo={house.photo}
            houseDisplay={houseDisplay}
          />
        ))}
      </S.HouseCardsWrapper>
    </S.CharacteristicsContainer>
  );
};

export default CharacteristicssDialog;
