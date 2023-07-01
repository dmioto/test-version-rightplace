import styled, { css } from 'styled-components';

type FontProps = {
    color?: string;
}

export const TitleStrong = styled.h2<FontProps>`
    ${({ theme, color }) => css`
        font: 500 ${theme.fonts.lg} 'Poppins', 'sans-serif';
        color: ${color ? color : theme.colors.text[500]};

        ${theme.responsive.tablet(css`        
            font: 500 ${theme.fonts.xl} 'Poppins', 'sans-serif';
            letter-spacing: 1.2px;
        `)}
        
    `};
`;

export const TitleMedium = styled.h2`
    ${({ theme }) => css`
        font: 300 ${theme.fonts.sm} 'Poppins', 'sans-serif';
        letter-spacing: 1.2px;
        color: ${theme.colors.text[500]};

        ${theme.responsive.tablet(css`        
            font: 300 ${theme.fonts.md} 'Poppins', 'sans-serif';
            letter-spacing: 1.2px;
        `)}
    `};
`;

export const TitleSmall = styled.h3`
    ${({ theme }) => css`
        font: bold ${theme.fonts.xxs} 'Poppins', 'sans-serif';

        ${theme.responsive.tablet(css`
            font: bold ${theme.fonts.xxs} 'Poppins', 'sans-serif';
            letter-spacing: 1.2px;
        `)}
    `};
`;


export const SubtitleStrong = styled.h3`
    ${({ theme }) => css`
        font: bold ${theme.fonts.sm} 'Poppins', 'sans-serif';
        color: ${theme.colors.text[500]};

        ${theme.responsive.tablet(css`   
            font: bold ${theme.fonts.md} 'Poppins', 'sans-serif';
            letter-spacing: 1.2px;
        `)}
    `};
`;

export const PoppingsExtraLight = styled.p`
    ${({ theme }) => css`
        font: 500 ${theme.fonts.xxs} 'Poppins', 'sans-serif';
        color: ${theme.colors.text[500]};

        ${theme.responsive.tablet(css`   
            font: 500 ${theme.fonts.xs} 'Poppins', 'sans-serif';
            letter-spacing: 1.2px;
        `)}
    `};
`;

export const PoppingsSemiBold = styled.p`
    ${({ theme }) => css`
        font: 600 ${theme.fonts.xxs} 'Poppins', 'sans-serif';
        color: ${theme.colors.text[500]};

        ${theme.responsive.tablet(css`   
            font: 600 ${theme.fonts.xs} 'Poppins', 'sans-serif';
            letter-spacing: 1.2px;
        `)}
    `};
`;

