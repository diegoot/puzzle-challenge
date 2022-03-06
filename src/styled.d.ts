// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: number;
    palette: {
      common: {
        black: string;
        white: string;
        yellow: string;
        gray: string;
      };
      success: string;
      failure: string;
    };
  }
}
