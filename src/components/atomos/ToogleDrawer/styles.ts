// import { css, styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';

import styled from "styled-components";
import { css } from "styled-components";

export const IconButtonToogle = styled.div`
    ${({theme}) => css`
        width: 20px;
        height: 45px;
        border-radius: 0px 150px 150px 0px;
        background: #fff;

        &:hover {
            background-color:#fff
            opacity: 0.9;
        }
        svg {
           
            color: ${theme.colors.text};
            font-weight: 300;
            height:45px;
        }
    `};
`;