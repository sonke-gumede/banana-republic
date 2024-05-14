import styled from "styled-components";
import Left from "../Left";
import Right from "../Right";
import { useState } from "react";

const Main = styled.div`
  margin-top: 30px;
  border-radius: 20px;
  align-self: center;
  display: grid;
  grid-template-columns: 35% 65%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 600px) {
    & {
      display: flex;
      flex-direction: column;
    }
  }
`;

const Container: React.FunctionComponent<{}> = () => {
  const [toggled, setToggle] = useState<boolean>(false);
  const onSetToggle = () => {
    setToggle(!toggled);
  };
  return (
    <Main>
      <Left onToggle={onSetToggle} toggled={toggled} />
      <Right toggled={toggled} />
    </Main>
  );
};
export default Container;
