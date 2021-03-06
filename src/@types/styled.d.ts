import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      bg: string;
      text: string;
      lightContrast: string;
      details: string;
      vibrant: string;
    };
  }
}
