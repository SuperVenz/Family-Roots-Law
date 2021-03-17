import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useStaticQuery, graphql } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  padding-bottom: 2em;
`;
const StyledBackgroundImage = styled((props) => <BackgroundImage {...props} />)`
  height: 100vh;
`;
const CustomButton = styled.button`
  padding-top: 0.5em;
  padding-bottom: 0.5rem;
  padding-right: 2rem;
  padding-left: 2rem;
  background-color: #8c6034;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.5em;
  width: 60%;
`;
const Text = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  justify-content: center;
  padding-top: 5em;
`;
const Title = styled.h1`
  color: white;
  padding-bottom: 2em;
`;
function Hero(props) {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Hero.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  );

  const image = getImage(placeholderImage);
  const bgImage = convertToBgImage(image);

  return (
    <Wrapper>
      <StyledBackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...bgImage}
        preserveStackingContext
      >
        <Text>
          <Title>
            Your Legacy.
            <br />
            My Priority.
          </Title>
          <CustomButton>Contact Me</CustomButton>
        </Text>
      </StyledBackgroundImage>
    </Wrapper>
  );
}
export default Hero;
