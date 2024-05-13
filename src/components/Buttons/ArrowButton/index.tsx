import styled from "styled-components";

const Button = styled.button`
  && {
    width: 50px;
    height: 50px;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.charcoalGrey};
    border: none;
    padding: 10px;
    align-self: center;
    cursor: pointer;
  }
`;

const Image = styled.img<{ toggled?: boolean }>`
  && {
    transform: ${({ toggled }) =>
      toggled ? `rotateY(3.142rad);` : `rotateY(0)`};
  }
`;
interface ArrowButtonProps {
  onClick: (event: React.BaseSyntheticEvent<any>) => void;
  toggled?: boolean;
}

const ArrowButton: React.FunctionComponent<ArrowButtonProps> = ({
  onClick,
  toggled,
}) => {
  return (
    <Button onClick={onClick}>
      <Image src="src/assets/images/arrow.svg" toggled={toggled} />
    </Button>
  );
};

export default ArrowButton;
