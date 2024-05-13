import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  && {
    margin-right: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    & > label {
      margin-right: 10px;
    }
  }
`;

const Label = styled.label`
  && {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.cloudyBlue};
    margin-left: 10px;
  }
`;

const Icon = styled.div`
  && {
    text-align: center;
    width: 42px;
    height: 42px;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.colors.cloudyBlue};
    & > svg {
      position: relative;
      top: 10px;
    }
  }
`;
interface ToggleProps {
  label: string;
  children: any;

}
const Toggle: React.FunctionComponent<ToggleProps> = ({ children, label }) => {
  const [toggled, setToggled] = useState<boolean>(false);
  const onToggle = () => {
    setToggled(!toggled);
    console.log('actions', toggled)
  };
  return (
    <Container onClick={onToggle}>
      <Icon>{children}</Icon>
      <Label>{label}</Label>
    </Container>
  );
};

export default Toggle;
