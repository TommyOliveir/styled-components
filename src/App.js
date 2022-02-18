import  StyledButton, {FancyButton, SubmitButton}  from './Components/Buttons/Button'
import { AnimatedLogo } from './Components/Buttons/Button.styles';
import logo from './logo.svg'
import sun from './tomimages/sun.png'
import earth from './tomimages/earth.png'




function App() {
  return (
    <div className="App">
      <AnimatedLogo src={logo}/>
      <AnimatedLogo src={sun}/>
      <AnimatedLogo src={earth}/>
      <br></br>
     <StyledButton >click</StyledButton>
     <StyledButton variant='outline'>click</StyledButton>
     <FancyButton>Fancy</FancyButton>
    <SubmitButton>submit</SubmitButton>
     
    </div>
  );
}

export default App;
