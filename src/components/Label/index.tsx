import { LabelHTMLAttributes } from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  && {
    color: ${({ theme }) => theme.colors.charcoalGrey};
    font-size: ${({ theme }) => theme.fonts.fontSize.small};
  }
`;

const Container = styled.div`
  && {
    width: 120px;
    text-align: left;
  }
`;

const Label: React.FunctionComponent<LabelHTMLAttributes<any>> = (props) => {
  const { children } = props;
  return (
    <Container>
      <StyledLabel {...props}>{children}</StyledLabel>
    </Container>
  );
};

export default Label;
