import styled from "styled-components";
import { css } from "styled-components";

export const ColumnHeader = styled.div`
    ${({theme}) => css`  
        color: ${theme.colors.purple["500"]};
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 5px;
    `}

`;

export const DroppableStyles = styled.div`
    ${({theme}) => css`    
      width: 33%;
      padding: 10px;
      text-align: center;
      background-color: ${theme.colors.white};
      height: 180px;  
    `}
`;