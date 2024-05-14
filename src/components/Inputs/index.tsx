import * as React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  && {
    height: 30px;
    border: solid thin ${({ theme }) => theme.colors.cloudyBlue};
    color: ${({ theme }) => theme.colors.charcoalGrey};
    border-radius: 5px;
    width: -webkit-fill-available;
    padding: 0px 5px;
    &:focus {
      outline: none !important;
      border: 1px solid ${({ theme }) => theme.colors.yellow};
    }
  }
`;

const Input: React.FunctionComponent<React.InputHTMLAttributes<any>> = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
