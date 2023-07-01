import styled, { css } from 'styled-components';

export const FilterCharacteristicsContainer = styled.div`
    ${() => css`
        margin: 10px 0 25px 0;
    `};
`;

export const FilterHeader = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-wrap: wrap;
        margin: 10px 0;
        align-items: center;
        border-top: 1px solid ${theme.colors.leaf[500]};
        border-bottom: 1px solid ${theme.colors.leaf[500]};

        h2 {
            margin: 20px 0;
        }

        p{
            font-weight: 500;
            color:${theme.colors.text['500']};
        }

        span {
            color:${theme.colors.text['500']};
        }

        .sales-rent-container {
            padding: 5px;

            button {
                color:${theme.colors.text['500']};
            }

            .active {
              background-color: ${theme.colors.white};
              color:${theme.colors.purple['500']};
              border-radius:5px;
            }
        }

        .filter-itens {
            border-right: 1px solid ${theme.colors.leaf[500]};
            border-left: 1px solid ${theme.colors.leaf[500]};
            padding: 3px 5px;
            
            p {
              font-weight: 600;             
            }

            button {
                display: flex;
                align-items: center;
            }
        }

        .more-settings {
            margin-left: auto;
        }
    `};
`;

export const ButtonFilter = styled.button`
    ${() => css`
        padding: 3px 5px;       
        
    `};
`;

export const FiltersLayout = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        
        .layout-filter {
            display: none;

            svg{
                color:${theme.colors.grey['400']};
                font-size: 20px;
            }

            ${theme.responsive.mobile(css`     
               display: flex;
               justify-content: space-between;      
            `)}
            
        }
    `};
`;

export const FormControlFilter = styled.div`
    ${({ theme }) => css`
     display: flex;
     align-items: center;
     margin-left: 10px;

     p {
        font-weight: 600;
     }

    select{
      background-color:transparent;
      color: ${theme.colors.text['500']};
    }
   `};

`;