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
  }
`;

const ButtonGroup = styled.div`&&{
    & > button {
        margin-top: 40px;
        margin-right: 10px;
    }
}`

const Forms: React.FunctionComponent<{}> = () => {
  return (
    <FormContainer>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder="John Doe"/>
      </FormGroup>
      <FormGroup>
        <Label>Gender</Label>
        <Toggle label="Male" >
            <MaleIcon color="white"/>
        </Toggle>
        <Toggle label="Female" >
            <FemaleIcon color="white"/>
        </Toggle>
      </FormGroup>
      <FormGroup>
        <Label>Date of birth</Label>
        <Input type="date" />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email"  placeholder="john@email.com"/>
      </FormGroup>
      <FormGroup>
        <Label>Mobile</Label>
        <Input type="tel"  placeholder="+277546781234"/>
      </FormGroup>
      <FormGroup>
        <Label>Customer ID</Label>
        <Input type="number"  placeholder="+277546781234"/>
      </FormGroup>
      <FormGroup>
        <Label>Membership</Label>
        <Toggle label="Classic" >
            <CardIcon color="white"/>
        </Toggle>
        <Toggle label="Silver" >
            <CardIcon color="white"/>
        </Toggle>
        <Toggle label="Gold" >
            <CardIcon color="white"/>
        </Toggle>
      </FormGroup>
      <FormGroup>
        <Label></Label>
        <ButtonGroup>
            <SubmitButton varient="default">CANCEL</SubmitButton>
            <SubmitButton varient="primary">SAVE</SubmitButton>
        </ButtonGroup>
      </FormGroup>
    </FormContainer>
  );
};

export default Forms;
