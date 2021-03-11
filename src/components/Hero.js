import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Button from "./Button";

const Wrapper = styled.div`
  padding-bottom: 2em;
`;
const Text = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  justify-content: center;
  z-index: 30;
  padding-top: 50%;
  padding-left: 25%;
`;
const Title = styled.h1`
  color: white;
  padding-bottom: 2em;
`;
function Hero(props) {
  return (
    <Wrapper>
      <Text>
        <Title>
          Your Legacy.
          <br />
          My Priority.
        </Title>
        <Button tag="Contact Me" />
      </Text>
      <StaticImage
        loading="eager"
        placeholder="blurred"
        src="../images/Hero.png"
        alt="Hero Image"
        layout="fullWidth"
      />
    </Wrapper>
  );
}
export default Hero;
