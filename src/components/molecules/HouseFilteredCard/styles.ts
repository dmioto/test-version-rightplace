import styled, { css } from 'styled-components';


type houseFilteredProps = {
    houseDisplay: string
}

export const HouseFilteredContainer = styled.div<houseFilteredProps>`
    ${({ theme, houseDisplay }) => css`
        border-radius: 5px;
        background: ${theme.colors.white};        
        padding: 10px;
        text-align: start;

        ${theme.responsive.mobile(css`        
            display: ${houseDisplay === 'block' ? 'flex' : 'block'};            
            width: ${houseDisplay === 'block' ? '100%' : '200px'};
            margin: 10px auto;
        `)}
        
    `};
`;

export const ContainerPhotoHouse = styled.div`
    img {
        max-width: 180px;
    }
`;

export const ContainerAsideRight = styled.div<houseFilteredProps>`
    ${({ houseDisplay, theme }) => css`
        text-align: left;
        margin-left: ${houseDisplay === 'block' ? '5px' : '0'};
        margin-right: 12px;
        font-size: 12px;

        .neiborhoud {
            margin-top: 10px;
        }

        .price-flex {
            margin-top: 0;
            font-weight: 400;
            font-size:${theme.fonts.lg};
            color:${theme.colors.text['500']};
            display: ${houseDisplay === 'block' ? 'block' : 'none'};

            span{
                font-size:${theme.fonts.sm};
            }

            ${theme.responsive.mobile(css`            
              margin-top: ${houseDisplay === 'block' ? '25px' : '20px'};
            `)}                      
        }
    `};
`;

export const ContainerAsideLeft = styled.div<houseFilteredProps>`
    ${({ theme, houseDisplay }) => css`
        margin-left: auto;
        margin-top: 10px;
        display:${houseDisplay === 'block' ? 'block' : 'flex'};
        align-items: center;
        gap: 10px;

        .price-block {
            display: ${houseDisplay === 'block' ? 'none' : 'block'};
            font-weight: 400;
            font-size:${theme.fonts.md};
            color:${theme.colors.text['500']};

            span{
                font-size:${theme.fonts.sm};
            }
        }

        .listening {
            display: ${houseDisplay === 'block' ? 'block' : 'none'};
            font-weight: 400;
            font-size:${theme.fonts.sm};
        }

        .fitting {
            margin-bottom: 0;
            
            ${theme.responsive.mobile(css`            
               margin-bottom: ${houseDisplay === 'block' && '50px'};
            `)}
            

            span {
                color: ${theme.colors.purple['500']};
            }
        }
    `};
`;