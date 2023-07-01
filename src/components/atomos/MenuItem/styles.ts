import styled, { css } from 'styled-components';

export const MenuItemContainer = styled.div`
  ${({ theme }) => css`
    ${theme.responsive.tablet(css`
      display: none;
    `)}

    li {
      list-style: none;
      margin-bottom: 20px;
      display: flex;
      cursor: pointer;
      text-align: center;

      a {
        color: ${theme.colors.text[500]};
        font-weight: 300;

        &:hover {
          color: ${theme.colors.purple['500']};
        }
      }
    }
  `}
`;