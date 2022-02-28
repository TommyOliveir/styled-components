import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./Components/Buttons/Button";
import { AnimatedLogo, Darkbutoon, Darkbutton } from "./Components/Buttons/Button.styles";
import logo from "./logo.svg";
import sun from "./tomimages/sun.png";
import earth from "./tomimages/earth.png";
import { ThemeProvider } from "styled-components";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AnimatedLogo src={logo} />
        <AnimatedLogo src={sun} />
        <AnimatedLogo src={earth} />
        <br></br>
        <StyledButton>click</StyledButton>
        <StyledButton variant="outline">click</StyledButton>
        <FancyButton>Fancy</FancyButton>
        <SubmitButton>submit</SubmitButton>
        <Darkbutton>Dark Theme</Darkbutton>
      </div>
    </ThemeProvider>
  );
}

export default App;
