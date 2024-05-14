import styled from "styled-components";
import Input from "../Inputs";
import Label from "../Label";
import Toggle from "../Toggle";
import MaleIcon from "../Icons/male-icon";
import FemaleIcon from "../Icons/female-icon";
import CardIcon from "../Icons/card-icon";
import SubmitButton from "../Buttons/SubmitButton";

const FormContainer = styled.form`
  && {
    display: flex;
    flex-direction: column;
    & > div {
      margin-bottom: 20px;
    }
  }
`;

const FormGroup = styled.div`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;
    & > label {
      margin-right: 30px;
    }

    & .mobile {
      display: flex;
      position: relative;
      left: -24px;
    }
    @media only screen and (max-width: 600px) {
      & {
        width: 93%;
        flex-direction: column;
        align-items: flex-start;
      }
      & > label {
        margin-right: 0;
      }
      & > .mobile {
        display: flex;
        left: 0;
      }
    }
  }
`;

const ButtonGroup = styled.div`
  && {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    & > button {
      margin-top: 40px;
      margin-right: 10px;
    }
    @media only screen and (max-width: 600px) {
      & {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      & button {
        width: 100%;
        margin-top: 0px;
        margin-right: 27px;
        margin-bottom: 10px;
      }
    }
  }
`;

const Forms: React.FunctionComponent<{}> = () => {
  return (
    <FormContainer>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder="John Doe" />
      </FormGroup>
      <FormGroup>
        <Label>Gender</Label>
        <div className="mobile">
          <Toggle label="Male">
            <MaleIcon color="white" />
          </Toggle>
          <Toggle label="Female">
            <FemaleIcon color="white" />
          </Toggle>
        </div>
      </FormGroup>
      <FormGroup>
        <Label>Date of birth</Label>
        <Input type="date" />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="john@email.com" />
      </FormGroup>
      <FormGroup>
        <Label>Mobile</Label>
        <Input type="tel" placeholder="+277546781234" />
      </FormGroup>
      <FormGroup>
        <Label>Customer ID</Label>
        <Input type="number" placeholder="5434590987234" />
      </FormGroup>
      <FormGroup>
        <Label>Membership</Label>
        <div className="mobile">
          <Toggle label="Classic">
            <CardIcon color="white" />
          </Toggle>
          <Toggle label="Silver">
            <CardIcon color="white" />
          </Toggle>
          <Toggle label="Gold">
            <CardIcon color="white" />
          </Toggle>
        </div>
      </FormGroup>
      <ButtonGroup>
        <SubmitButton varient="default" type="reset">
          CANCEL
        </SubmitButton>
        <SubmitButton varient="primary">SAVE</SubmitButton>
      </ButtonGroup>
    </FormContainer>
  );
};

export default Forms;
