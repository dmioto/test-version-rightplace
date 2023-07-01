import * as React from 'react';
import * as S from './styles';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

type ToogleCharacteristicsProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToogleCharacteristics: React.FC<ToogleCharacteristicsProps> = ({
  open,
  setOpen,
}) => {
  return (
    <S.IconButtonToogle onClick={() => setOpen(!open)}>
      {open ? <BsChevronLeft /> : <BsChevronRight />}
    </S.IconButtonToogle>
  );
};

export default ToogleCharacteristics;
