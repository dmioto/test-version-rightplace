import styled from 'styled-components';
import { css } from 'styled-components';

export const PreferencesFilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const PreferencesDialogHeader = styled.div`
  ${() => css`
    text-align: center;
    margin: 20px 0;

    p {
      margin-top: 10px;
    }
  `}
`;

export const DragInformationMessage = styled.div`
  ${() => css`
    display: flex;
    margin: 40px auto;
    gap: 30px;

    img {
      width: 50px;
      height: 50px;
    }
  `}
`;

export const DragFieldWrapper = styled.div`
  ${() => css`
    display: flex;
    gap: 5px;
  `}
`;

export const CarrouselDragField = styled.div`
  ${() => css`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    max-width: 580px;
    width: 100%;

    .todos {
      gap: 5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  `}
`;

export const DragFieldContainer = styled.div`
  ${({ theme }) => css`
    display: block;
    width: 80px;

    ${theme.responsive.desktop(css`
      width: 180px;
    `)}
  `}
`;

export const DragDropDivs = styled.div`
  ${({ theme }) => css`
    width: 33%;
    padding: 10px;
    text-align: center;
    background-color: ${theme.colors.white};
    height: 180px;
    border-radius: 7px;

    h2 {
      color: ${theme.colors.purple['500']};
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 5px;
    }
  `}
`;
