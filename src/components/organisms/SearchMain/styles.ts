import styled, { css } from 'styled-components';

type ContainerProps = {
    img: string;
}

export const ContainerSearchMain = styled.div<ContainerProps>`
    ${({  img }) => css`
        background-image: url(${img}) ;
        background-repeat: no-repeat;
        background-size: cover;
        margin: 20px auto;
        display: flex;
        justify-content: center;
        align-items:start;
        height:65vh;
        `};
    `;

export const FormControlMain = styled.form`
    ${({ theme }) => css` 
        max-width: 780px;
        width: 80%;

     
        
        img {
            display: none;
            
            ${theme.responsive.tablet(css`            
                display: block;
            `)}
        }
        
       
    `};
`;