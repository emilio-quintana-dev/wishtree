import { createTheme, alpha } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#061492",
      contrastText: "#000",
    },
    customPalette: {
      purple: "#6142fb",
      seaweed: "#274f1d",
      barberry: "#d2e91f",
      melanie: "#e4c3e4",
      darkMelanie: alpha("#e4c3e4", 0.9),
      honeyFlower: "#502376",
      darkHoneyFlower: alpha("#502376", 0.9),
      darkTan: "#770014",
      gray: "#1e2330",
      lightGray: "#eff0ec",
      militaryGreen: "#70764d",
      blue: "#061492",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 14,
  },
});
