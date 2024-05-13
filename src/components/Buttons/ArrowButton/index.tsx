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
interface ArrowButtonProps {
  onClick: (event: React.BaseSyntheticEvent<any>) => void;
}

const ArrowButton: React.FunctionComponent<ArrowButtonProps> = ({
  onClick,
}) => {
  return (
    <Button onClick={onClick}>
      <img src="src/assets/images/arrow.svg" />
    </Button>
  );
};

export default ArrowButton;
