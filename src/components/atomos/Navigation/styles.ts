import styled, { css } from 'styled-components';
import { NavigationProps } from '.';

export const NavigationContainer = styled.div<NavigationProps>`
  ${({ theme, open }) => css`
    ${theme.responsive.tablet(css`
      display: none;
    `)}

    ul {
      padding: 20px;
      position: absolute;
      transition:0.5s;
      background-color:${theme.colors.white};
      top: 75px;
      right: 0;
      bottom: 0;
      width: 100%;
      height: ${open ? '250px' : '0'};
      z-index: ${open ? '3' : '-1'};
      
      
    }
  `}
`;