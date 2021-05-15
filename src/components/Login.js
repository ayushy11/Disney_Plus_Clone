import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    opacity: 0.8;
    z-index: -1;
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
  }
`;

const CTA = styled.div`
  border: 2px solid white;
  width: 60%;
  padding: 80px 40px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTALogoOne = styled.img``;
const CTALogoTwo = styled.img`
  width: 90%;
`;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 18px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
  
`;

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>description</Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;
