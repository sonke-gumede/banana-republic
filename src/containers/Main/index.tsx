import styled from "styled-components";
import Left from "../Left";
import Right from "../Right";
const Main = styled.div`
  margin-top: 30px;
  border-radius: 20px;
  align-self: center;
  display: grid;
  grid-template-columns: 35% 65%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const Container:React.FunctionComponent<{}> = () => {
  return (
    <Main>
      <Left />
      <Right />
    </Main>
  );
};
export default Container;
