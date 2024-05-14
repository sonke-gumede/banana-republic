import styled from "styled-components";
import faceSVG from "../../assets/images/face.svg";
import ArrowButton from "../../components/Buttons/ArrowButton";

const Container = styled.div`
  && {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.yellow};
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    padding: 30px 55px;
    text-align: center;
    @media only screen and (max-width: 600px) {
        & {
            border-top-right-radius: 25px;
            border-top-left-radius: 25px;
            border-bottom-left-radius: 0;
        }
      }
  }
`;

const AvatarCaontainer = styled.div`
  && {
    text-align: center;
  }
`;

const Image = styled.img`
  && {
    max-width: 100%;
    height: auto;
  }
`;

const Content = styled.div`
  && {
    margin-bottom: 30px;
    margin-top: 30px;
  }
`;

interface LeftProps {
  onToggle: (event: React.BaseSyntheticEvent) => void;
  toggled?: boolean;
}
const Left: React.FunctionComponent<LeftProps> = ({ onToggle,toggled }) => {
  return (
    <Container>
      <AvatarCaontainer>
        <Image src={faceSVG} />
      </AvatarCaontainer>
      <Content>
        <h1>Front-end challenge!</h1>
        <p>This is a design that you will need to code up and impress</p>
      </Content>
      <ArrowButton onClick={onToggle} toggled={toggled}/>
    </Container>
  );
};

export default Left;
