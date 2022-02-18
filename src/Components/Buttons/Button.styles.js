import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  box-shadow: inset 0px 1px 0px 0px green;
  /* background-color: ${(props) => props.backgroundColor}; */
  background-color: ${(props) =>
    props.variant === "outline" ? "#FFF" : "green"};
  border-radius: 6px;
  border: 2px solid green;
  display: inline-block;
  cursor: pointer;
  color: ${(props) => (props.variant === "outline" ? "green" : "#FFF")};
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px green;

  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#FFF" : "green"};
    color: ${(props) => (props.variant !== "outline" ? "green" : "#FFF")};
  }
  &:hover {
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;

export const SubmitButton = styled(StyledButton).attrs((props) => ({
  type: "submit",
}))`
  &:active {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#FFF" : "green"};
  }
`;

const rotate = keyframes`
from {
  transform: rotate()(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation:${rotate} infinite 20s linear;
`;
