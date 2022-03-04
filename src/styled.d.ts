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
      };
      success: string;
      failure: string;
    };
  }
}
