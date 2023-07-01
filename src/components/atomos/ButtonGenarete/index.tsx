import * as S from './styles';
import AutorenewIcon from '@mui/icons-material/Autorenew';

type ButtonGenareteProps = {
  onClickNext: () => void;
  text: string;
};

const ButtonGenarete = ({ onClickNext, text }: ButtonGenareteProps) => {
  return (
    <S.ButtonGenareteWrapper onClick={() => onClickNext()}>
      <p>{text}</p>
      <div className="auto-wrapper">
        <AutorenewIcon />
      </div>
    </S.ButtonGenareteWrapper>
  );
};

export default ButtonGenarete;
