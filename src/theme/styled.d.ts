// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      yellow: string;
      tangerine: string;
      cloudyBlue: string;
      blueGreen: string;
      paleGrey: string;
      charcoalGrey: string;
    };
    fonts: {
      fontSize: {
        small: string;
        medium: string;
        large: string;
      };
    };
  }
}
