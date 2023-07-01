import styled from "styled-components";
import { css } from "styled-components";

export const IndicatorContainer = styled.div`
    ${({theme}) => css`   
        border:1px solid ${theme.colors.grey['400']};
        background-color:${theme.colors.white};
        display:block;
        height:60px;
        font-size:8px;
        text-align:center;
        padding:5px;
        border-radius: 5px;
        transition: 'background-color .8s ease-out';
        width: 150px;

        &:hover{
            background-color: ${theme.colors.grey['400']};
        }
        
        

        ${theme.responsive.tablet(css`
            height:50px;        
        `)}

        ${theme.responsive.laptop(css`
            height:30px;
            display:flex;
            align-items:center;
            gap:10px;
            max-width: 290px;
            border-radius:15px;
        `)}

        p {
            color:${theme.colors.text['500']};
            font-weight:bold;
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
            text-overflow:ellipsis;
            text-align:start;
        }

        svg{
            ${theme.responsive.laptop(css`
            font-size:15px;        
        `)}
        }

        .drag{
            color: ${theme.colors.grey['400']};
        }

        .icon{
            color: ${theme.colors.purple['500']};
        }
    `}

`