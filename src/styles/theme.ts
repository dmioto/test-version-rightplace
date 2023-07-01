function pxToRem(rem: string) {
    return (parseInt(rem) / 16).toString() + 'rem';
}

import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from 'styled-components';
  
  export const commonColors = {    
        white: '#fff',
        leaf: {
            500: '#E5E5E7',
            400: '#F2F2F4'
        },
        purple: {
            500: '#9900CC',
            400: '#770CC2',
            300: '#61009E'
        },
        text: {
            500: '#36293D'
        },
        grey: {
          400: '#959da2',
        }
    
  };
  
  const responsive = {
    desktop: (
      style:
        | FlattenInterpolation<ThemeProps<DefaultTheme>>
        | FlattenSimpleInterpolation
        | string,
    ) => css`
      @media (min-width: ${({ theme }) => theme.screens.desktop}) {
        ${style}
      }
    `,
    laptop: (
      style:
        | FlattenInterpolation<ThemeProps<DefaultTheme>>
        | FlattenSimpleInterpolation
        | string,
    ) => css`
      @media (min-width: ${({ theme }) => theme.screens.laptop}) {
        ${style}
      }
    `,
    tablet: (
      style:
        | FlattenInterpolation<ThemeProps<DefaultTheme>>
        | FlattenSimpleInterpolation
        | string,
    ) => css`
      @media (min-width: ${({ theme }) => theme.screens.tablet}) {
        ${style}
      }
    `,
    mobile: (
      style:
        | FlattenInterpolation<ThemeProps<DefaultTheme>>
        | FlattenSimpleInterpolation
        | string,
    ) => css`
      @media (min-width: ${({ theme }) => theme.screens.mobile}) {
        ${style}
      }
    `,
  };
  
  const commonFont = {    
    xxs: pxToRem('12'),
    xs: pxToRem('14'),
    sm: pxToRem('16'),
    md: pxToRem('20'),
    lg: pxToRem('25'),
    xl: pxToRem('28'),
    xxl: pxToRem('36'),
    xxxl: pxToRem('45')  
    
  };
  
  const commonTheme = {
    screens: {
      desktop: '1366px',
      laptop: '1024px',
      tablet: '768px',
      mobile: '600px',
      mobile1: '412px',
    },
    responsive,
  };
  
  export const light = {
    ...commonTheme,
    fonts: { ...commonFont },
    colors: {
      ...commonColors,
    },
  };
  
  export type ThemeType = typeof light;
  
  export const dark: ThemeType = {
    ...commonTheme,
    fonts: { ...commonFont },
    colors: {
      ...commonColors,
    },
  };
  
  const theme = light;
  
  export default theme;