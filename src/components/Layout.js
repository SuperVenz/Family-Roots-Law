import React from "react";
import Header from "./Header";
import "../static/cssReset.css";
import "../static/global.css";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
const Wrapper = styled.div``;
export default function Layout({ children, pageMeta }) {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            originalImg
            originalName
          }
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Header />
      <Helmet>
        <title>{`Family Roots Law | ${pageMeta.title}`}</title>
        {/* The charset, viewport and author meta tags will always have the same value, so we hard code them! */}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Alec Venzor" />
        {/* Social Media */}
        <meta name="image" content={data.file.childImageSharp.fluid} />
        <meta property="og:image" content={data.file.childImageSharp.fluid} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={data.file.childImageSharp.fluid} />

        <html lang="en" />

        {/* The rest we set dynamically with props */}
        <meta name="description" content={pageMeta.description} />

        {/* We pass an array of keywords, and then we use the Array.join method to convert them to a string where each keyword is separated by a comma */}
        <meta name="keywords" content={pageMeta.keywords.join(",")} />
      </Helmet>
      {children}
    </Wrapper>
  );
}
