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
    & > .arrow-left {
      transform: rotateY(0deg);
      transition: transform 0.3s linear;
    }

    & > .arrow-right {
      transform: rotateY(180deg);
      transition: transform 0.3s linear;
    }

    @media only screen and (max-width: 600px) {
      & {
        transform: rotate(90deg) !important;
      }
      .arrow-left {
        transform: rotateY(0) !important;
        transition: transform 0.3s linear;
      }
      .arrow-right {
        transform: rotateY(3.142rad) !important;
        transition: transform 0.3s linear;
      }
    }
  }
`;

const Image = styled.img``;

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
      <Image
        src="src/assets/images/arrow.svg"
        className={toggled ? "arrow-right" : "arrow-left"}
      />
    </Button>
  );
};

export default ArrowButton;
