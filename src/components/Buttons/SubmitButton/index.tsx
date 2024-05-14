import React from "react";
import styled from "styled-components";

const StyledButton = styled.button<{ varient: "default" | "primary" }>`
  && {
    color: ${({ theme }) => theme.colors.charcoalGrey};
    width: 100px;
    height: 40px;
    background-color: ${({ theme, varient }) =>
      varient === "primary" ? "#86E3C6" : theme.colors.paleGrey};
    border: solid thin
      ${({ theme, varient }) =>
        varient === "primary" ? "#86E3C6" : theme.colors.cloudyBlue};
    border-radius: 5px;
    cursor: pointer;
  }
`;
interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  varient: "default" | "primary";
}

const SubmitButton: React.FunctionComponent<ButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <StyledButton {...rest} varient={rest.varient}>
      {children}
    </StyledButton>
  );
};

export default SubmitButton;
