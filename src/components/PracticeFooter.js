import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const StyledBackgroundImage = styled((props) => <BackgroundImage {...props} />)`
  height: 50vh;
`;
const Wrapper = styled.div`
  display: flex;
  font-size: 0.7em;
  height: 100%;
  width: 100%;
  flex-direction: row nowrap;
  justify-content: space-between;
`;
const LeftList = styled.ul`
  align-self: flex-end;
  line-height: 1.7em;
  color: white;
  padding-left: 3em;
  padding-bottom: 1em;
`;
const RightList = styled.ul`
  align-self: flex-end;
  line-height: 1.7em;
  color: white;
  padding-right: 3em;
  padding-bottom: 1em;
`;
const LI = styled.li``;
const A = styled.a`
  color: white;
`;

function PracticeFooter(props) {
  const { placeholderImage } = useStaticQuery(
    graphql`
      {
        placeholderImage: file(relativePath: { eq: "PracticeFooter.png" }) {
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
    <StyledBackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      <Wrapper>
        <LeftList>
          <LI>PO Box</LI>
          <LI>4474 Oceanside</LI>
          <LI>Califorina,</LI>
          <LI>92052</LI>
        </LeftList>
        <RightList>
          <LI>
            <A href="tel:4425005177">(442) 500-5177</A>
          </LI>
          <LI>
            <A href="mailto: Mindy@familyrootslaw.com">
              Mindy@familyrootslaw.com
            </A>
          </LI>
          <LI>Mindy Galindo, Your Family</LI>
          <LI>Legacy, and Life Lawyer</LI>
        </RightList>
      </Wrapper>
    </StyledBackgroundImage>
  );
}

export default PracticeFooter;
