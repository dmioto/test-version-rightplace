import styled, { css } from 'styled-components';

type HouseWrapperProps = {
    display: string;
}

export const CharacteristicsContainer = styled.div`
    ${() => css` 
        h2 {
            margin: 0 0 30px 0;
        }
    `};
`;

export const HouseHeader = styled.div`
  ${() => css`
        display: flex;
  `};
`

export const HouseCardsWrapper = styled.div<HouseWrapperProps>`
    ${({display}) => css`
        display: ${display};
        flex-wrap: wrap;
        justify-content:start;
    `};
`;
