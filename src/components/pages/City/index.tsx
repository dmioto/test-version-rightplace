import HeaderSettings from '../../molecules/HeaderSettings';
import Drawer from '../../molecules/Drawer';

// import CharacteristicssDialog from '../../organisms/CharacteristicsDialog';
import * as S from './styles';
import PreferencesFilter from '../../organisms/PreferencesFilter';
import CharacteristicssDialog from '../../organisms/CharacteristicsDialog';
import { useState } from 'react';

const City = () => {
  const [generate, setGenerate] = useState(false);
  return (
    <S.ContainerCity>
      <HeaderSettings />
      <Drawer>
        {generate ? (
          <CharacteristicssDialog onClickGenarete={() => setGenerate(false)} />
        ) : (
          <PreferencesFilter onClickGenarete={() => setGenerate(true)} />
        )}
      </Drawer>
    </S.ContainerCity>
  );
};

export default City;
