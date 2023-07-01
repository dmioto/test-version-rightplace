import styled, { css } from 'styled-components';

export const ContainerSelect = styled.div`
    ${({theme}) => css`    
        margin-top: 20%;
        background:${theme.colors.white};
        display:flex;
        height: 65px;        
        border-radius: 30px;
        position:relative;

        .location{
            width:175px;
            position:absolute;
            top: -200px;
            left: -50px; 
        }

        .search{
            position:absolute;
            border-radius: 14px;
            right:5px;
            top: 10px;
            background-color:${theme.colors.white};
        }
    `}

`

export const SelectMain = styled.select`
    ${({ theme }) => css`
        padding-left: 50px;     
        background-color: ${theme.colors.white};
        font-size: ${theme.fonts.md};
        width:100%;
        border-radius:30px;

        ${theme.responsive.tablet(css`        
            padding-left: 180px;
            font-weight: 300;
        `)}
        
        &::placeholder {
            font-size: ${theme.fonts.md};

            ${theme.responsive.tablet(css`            
                color: ${theme.colors.text[500]};
                font-weight: 300;
            `)}
            
        }

        .personalizar-option{
            background-color: ${theme.colors.white};

            &:hover{
                background-color:red;
            }
        }

      
        
    `};
`;

