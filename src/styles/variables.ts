import { DefaultTheme } from 'styled-components';
import breakpoints from './breakpoints';

const theme: DefaultTheme = {
  fonts: {
    main: 'Arial'
  },
  fontSize: {
    body: '14px',
    title: '30px'
  },
  colors: {
    body: '#f9fafc',
    error: '#d0021b',
    black: '#000',
    white: '#fff',
    link: '#00448b',
    hr: '#ddd',
    primary: '#17384c',
    secondary: '#a8a366'
  },
  margins: {
    small: '5px',
    medium: '10px',
    large: '20px'
  },
  paddings: {
    small: '5px',
    medium: '10px',
    large: '20px'
  },
  flexboxgrid: {
    gridSize: 12,
    gutterWidth: 2, // rem
    outerMargin: 1.6, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76 // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em, ~768px
      md: 64, // em, ~1024px
      lg: 82.5 // em, ~1320px
    }
  },
  breakpoints: breakpoints(
    {
      xs: 0, // em
      sm: 48, // em, ~768px
      md: 64, // em, ~1024px
      lg: 82.5 // em, ~1320px
    },
    'em'
  )
};

export default theme;
