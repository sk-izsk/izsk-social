export interface CustomTheme {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    gray: string;
    darkCyan: string;

    white: string;
    red: string;
  };
  fontProperties: {
    textFontSize: number;
    headerFontSize: number;
    fontFamily: string;
  };
  spacing: (value: number) => number;
}

const theme: CustomTheme = {
  colors: {
    primaryColor: "#2979ff",
    secondaryColor: "#2a2d34",
    gray: "#d1d1d1",
    darkCyan: "#2d898b",
    white: "#fff",
    red: "#ff0000",
  },
  fontProperties: {
    textFontSize: 16,
    headerFontSize: 36,
    fontFamily: "Open Sans,Montserrat, Fira Sans, Lato, Roboto",
  },
  spacing: (value: number) => 8 * value,
};

export { theme };
