import styled, { css } from 'styled-components';

export const HamburguerButton = styled.button`
  ${({ theme }) => css`
    ${theme.responsive.tablet(css`
      display: none;
    `)}
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
    &:hover {
      svg {
        path {
          stroke: ${theme.colors.purple['500']};
        }
      }
    }
  `}
`;