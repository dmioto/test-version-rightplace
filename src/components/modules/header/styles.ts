import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const ContainerHeader = styled.header`
  ${() => css`
    align-items: start;    
    display: flex;
    height: 75px;
    justify-content: space-between;
    padding: 10px 2vw;
    position: relative;
    transition: all 0.3s;
  `}
`;

export const ListItems = styled.ul`
  ${({ theme }) => css`
    display: none;
    ${theme.responsive.tablet(css`
      display: flex;
      gap: 25px;
      color: ${theme.colors.text[500]};
      li {
        color: ${theme.colors.text[500]};
        transition: all 0.2s;       
        font-weight: 300;

        &:hover {
          color: ${theme.colors.purple['500']};
        }
      }
    `)}
  `}
`;

export const LogoImage = styled(Link)`
  img{
    max-width: 150px;
  }
`

export const Login = styled(Link)`
  ${({theme}) => css`
  display: none;

  ${theme.responsive.tablet(css`  
    display:flex;
    align-items:center;
    gap: 10px;
    color: ${theme.colors.text[500]};
    
    img{
      max-width: 20px;
    }
  `)}
  `}

`