import styled from "styled-components";
import { css } from "styled-components";


export const ButtonGenareteWrapper = styled.button`
    ${({theme}) => css`      
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:150px;
        height:50px;
        font-size:10px;
        position:relative;
        background-color: ${theme.colors.purple['500']};
        border-radius: 25px 0 0 25px;
        left: 5%;
        color:${theme.colors.white};
        font-weight: 400;
        white-space: nowrap;

        p{
            margin-left: 10px;
        }



        .auto-wrapper{
            color: ${theme.colors.white};
            min-width: 60px;
            min-height: 60px;
            display:flex;
            justify-content:center;
            align-items:center;
            background-color: ${theme.colors.purple['500']};
            border-radius:50%;
            position:relative;
            left:15px;  
        }
    
    `}

`