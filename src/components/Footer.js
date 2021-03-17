import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
const Wrapper = styled.div`
  background-image: "url("../images/Footer.png");
  height: 10em;
  width: 10em;
`;

function Footer(props) {
  return <Wrapper></Wrapper>;
}

export default Footer;
