// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      main: string;
    };
    fontSize: {
      body: string;
      title: string;
    };
    colors: {
      body: string;
      error: string;
      black: string;
      white: string;
      link: string;
      hr: string;
      primary: string;
      secondary: string;
    };
    margins: {
      small: string;
      medium: string;
      large: string;
    };
    paddings: {
      small: string;
      medium: string;
      large: string;
    };
    flexboxgrid: {
      gridSize: number;
      gutterWidth: number;
      outerMargin: number;
      mediaQuery: string;
      container: {
        sm: number;
        md: number;
        lg: number;
      };
      breakpoints: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
      };
    };
    breakpoints: Record<'xs' | 'sm' | 'md' | 'lg', BaseThemedCssFunction<any>>;
  }
}
