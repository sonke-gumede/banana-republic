import styled from "styled-components";
import Forms from "../../components/Forms";

const Container = styled.div<{ toggled?: boolean }>`
  && {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme, toggled }) =>
      toggled ? theme.colors.paleGrey : theme.colors.tangerine};
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    padding: 30px 55px;
    text-align: left;

    & > h1 {
      margin-top: 2em;
    }
  }
`;
const Right: React.FunctionComponent<{ toggled?: boolean }> = ({ toggled }) => {
  return (
    <Container toggled={toggled}>
      {!toggled ? (
        <>
          <h1>My world today</h1>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante.{" "}
            <u>
              <b>View all days</b>
            </u>{" "}
            eu libero sit amet quam egestas semper. Aenean ultricies mi vitae
            est. Mauris placerat eleifend leo. Quisque sit amet est et sapien
            ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo
            vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
            condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
            dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent
            dapibus, neque id cursus faucibus, tortor neque egestas augue, eu
            vulputate magna eros eu erat. Aliquam erat
          </p>
        </>
      ) : (
        <Forms />
      )}
    </Container>
  );
};

export default Right;
