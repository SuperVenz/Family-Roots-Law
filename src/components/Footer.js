import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  background-image: "url("../images/Footer.png");
  height: 10em;
  width: 10em;
`;
function Footer(props) {
  return (
    <Wrapper>
      <StaticImage src="../images/Footer.png" alt="picture of kids swinging" />
    </Wrapper>
  );
}

export default Footer;
