import React from "react";
import styled from "styled-components";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
} from "react-icons/ai";
function Contact({ contactRef }) {
  return (
    <Container ref={contactRef}>
      <Form>
        <Range>
          <Label>NAME*</Label>
          <Input />
        </Range>
        <Range>
          <Label>EMAIL*</Label>
          <Input />
        </Range>
        <Range message={true}>
          <Label>MESSAGE*</Label>
          <Input />
        </Range>
        <Submit>Invia</Submit>
      </Form>
      <SocialFooter>
        <IconContainer>
          <InstaIcon />
        </IconContainer>
        <Line />
        <IconContainer>
          <LinkedIcon />
        </IconContainer>
        <Line />
        <IconContainer>
          <FacebookIcon />
        </IconContainer>
      </SocialFooter>
    </Container>
  );
}

export default Contact;
const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #141518;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  overflow: hidden;
  gap: 40px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 80vw;
  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
const Range = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    width: 45%;
    width: ${(props) => props.message && "100%"};
  }
`;
const Label = styled.div`
  color: white;
`;
const Input = styled.input`
  all: unset;
  border-bottom: 2px solid white;
  color: white;
  padding: 5px 10px;
`;
const Submit = styled.button`
  all: unset;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  background: -webkit-linear-gradient(
    0deg,
    rgba(64, 180, 118, 1) 0%,
    rgba(44, 211, 201, 1) 100%
  );
  font-weight: 900;
  padding: 10px 0;
  border-radius: 10px;
`;
const SocialFooter = styled.div`
  display: flex;
  align-items: center;
`;
const InstaIcon = styled(AiFillInstagram)`
  color: white;
  font-size: 25px;
  @media (min-width: 700px) {
    font-size: 50px;
  }
`;
const LinkedIcon = styled(AiFillLinkedin)`
  color: white;
  font-size: 25px;
  @media (min-width: 700px) {
    font-size: 50px;
  }
`;
const FacebookIcon = styled(AiFillFacebook)`
  color: white;
  font-size: 25px;
  @media (min-width: 700px) {
    font-size: 50px;
  }
`;
const IconContainer = styled.div`
  background-color: #21242a;
  height: 45px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.4);
  @media (min-width: 700px) {
    height: 80px;
  }
`;
const Line = styled.div`
  width: 10px;
  height: 4px;
  background-color: #21242a;
  box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.4);
`;
