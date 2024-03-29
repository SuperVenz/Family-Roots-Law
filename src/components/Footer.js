import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { getImage } from "gatsby-plugin-image";
const StyledBackgroundImage = styled((props) => <BackgroundImage {...props} />)`
  height: 50vh;
  @media screen and (min-width: 768px) {
    width: 60vw;
    height: 35vw;
  }
`;
const Wrapper = styled.div`
  display: flex;
  font-size: 0.7em;
  height: 100%;
  width: 100%;
  flex-direction: row nowrap;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    font-size: 1em;
  }
`;
const LeftList = styled.ul`
  align-self: flex-end;
  line-height: 1.7em;
  color: white;
  padding-left: 1em;
  padding-bottom: 1em;
`;
const RightList = styled.ul`
  align-self: flex-end;
  line-height: 1.7em;
  color: white;
  padding-right: 1em;
  padding-bottom: 1em;
`;
const Li = styled.li`
  margin-top: 10px;
  height: 24px;
`;
const A = styled.a`
  color: white;
  height: 48px;
`;

function Footer(props) {
  const { placeholderImage } = useStaticQuery(
    graphql`
      {
        placeholderImage: file(relativePath: { eq: "Footer.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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
          <Li>380 S. Melrose Drive</Li>
          <Li>Suite 349</Li>
          <Li>Vista, CA 92081</Li>
        </LeftList>
        <RightList>
          <Li>
            <A href="tel:4425005177">(442) 500-5177</A>
          </Li>
          <Li>
            <A href="mailto: Mindy@familyrootslaw.com">
              Mindy@familyrootslaw.com
            </A>
          </Li>
          <Li>Mindy Galindo, Your Family</Li>
          <Li>Legacy, and Life Lawyer</Li>
        </RightList>
      </Wrapper>
    </StyledBackgroundImage>
  );
}

export default Footer;
