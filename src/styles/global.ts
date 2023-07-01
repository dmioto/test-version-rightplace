import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
        * {
            margin: 0;
            padding: 0;
            outline: 0;
            border: 0;
            box-sizing: border-box;
        }

        body{
            font-family: 'Poppins', sans-serif;
        }
       

        input {
            border: none;

            :active,
            :focus-visible {
                outline: 2px solid ${theme.colors.purple['500']};
            }
        }
        button {
            background: none;
            cursor: pointer;
        }
        a {
            text-decoration: none;
        }
        ul {
            list-style: none;
        }
        
    `}
`;

export default GlobalStyles;