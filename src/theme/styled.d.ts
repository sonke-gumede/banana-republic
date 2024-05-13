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
      fontFamily: "";
      fontSize: {
        small: number;
        medium: number;
        large: number;
      };
    };
  }
}
