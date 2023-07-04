import styled from 'styled-components';
import { css } from 'styled-components';

type ToogleButtonProps = {
  open: boolean;
};

export const DrawerContainer = styled.div<ToogleButtonProps>`
  ${({ theme, open }) => css`
    background: ${theme.colors.leaf['400']};
    position: relative;
    z-index: 2;
    top: 10px;
    margin-left: ${open ? '0' : '-92vw'};
    transition: margin 0.2s;
    border-radius: 0 10px 10px 0;
    width: 92vw;

    ${theme.responsive.mobile(css`
      width: 56%;
      margin-left: ${open ? '0' : '-56%'};
      /* max-width: 700px; */
    `)}
  `};
`;

export const ToogleButton = styled.button<ToogleButtonProps>`
  ${() => css`
    position: absolute;
    top: 10px;
    right: -20px;
  `};
`;

export const DrawerWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    overflow-y: clip;
    position: relative;
    height: 78vh;
    padding: 25px 15px;
    text-align: start;
    /* overflow-y: auto; */
    background-color: ${theme.colors.leaf[500]};

    ${theme.responsive.desktop(css`
      padding: 100px;
    `)}

    ::-webkit-scrollbar {
      width: 5px;
      background-color: ${theme.colors.leaf[500]};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.text[500]};
    }
  `};
`;
