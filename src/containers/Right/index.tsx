import styled from "styled-components";
import Forms from "../../components/Forms";

const Container = styled.div<{ toggled?: boolean }>`
  && {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme, toggled }) =>
      toggled ? theme.colors.paleGrey : theme.colors.tangerine};
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    padding: 55px 55px;
    text-align: left;
    @media only screen and (max-width: 600px) {
      & {
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
        padding: 55px 27px;
        
      }

      #form {
        width: -webkit-fill-available;
      }
    }
    & > h1 {
      margin-top: 2em;
    }

    & > .hide-paragraph {
      opacity: 0;
      transition: opacity 400ms ease 0ms;
    }

    & > .show-paragraph {
      opacity: 1;
      transition: opacity 400ms ease 0ms;
    }

    & > .hide-form {
      z-index: -1;
      opacity: 0;
      transition: opacity 400ms ease 0ms;
    }

    & > .show-form {
      opacity: 1;
      transition: opacity 400ms ease 0ms;
    }

    #paragraph {
    }
    #form {
      position: absolute;
    }
  }
`;
const Right: React.FunctionComponent<{ toggled?: boolean }> = ({ toggled }) => {
  return (
    <Container toggled={toggled}>
      <div
        className={toggled ? "hide-paragraph" : "show-paragraph"}
        id="paragraph"
      >
        <h1>My world today</h1>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante.{" "}
          <u>
            <b>View all days</b>
          </u>{" "}
          eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien
          ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo
          vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
          condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
          dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent
          dapibus, neque id cursus faucibus, tortor neque egestas augue, eu
          vulputate magna eros eu erat. Aliquam erat
        </p>
      </div>
      <div className={toggled ? "show-form" : "hide-form"} id="form">
        <Forms />
      </div>
    </Container>
  );
};

export default Right;
