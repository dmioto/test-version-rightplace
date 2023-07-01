import styled, { css } from 'styled-components';

export const ContainerMain = styled.div`
   ${() => css``} 

`;

export const ContainerTitle = styled.div`
    ${({theme}) => css`
        text-align:center;

        ${theme.responsive.tablet(css`        
            text-align:start;
            padding-left: 36%;
        `)}
    `}  
`