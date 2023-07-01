import styled, { css } from 'styled-components';

export const ContainerHeaderSettings = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.leaf[500]};
        padding: 8px 0;
        ul {
            display: flex;
            justify-content: end;
            gap: 25px;
            padding-right: 25px;

            a {
                color: ${theme.colors.text[500]};

                &:hover {
                    opacity: 0.5;
                }
            }
        }
    `};
`;