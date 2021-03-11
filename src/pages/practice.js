import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Article from "../components/Article";
import styled from "styled-components";
import Button from "../components/Button";
import Layout from "../components/Layout";
const Practice = () => {
  return (
    <main>
      <StaticImage
        loading="eager"
        placeholder="blurred"
        src="../images/Practice.png"
        alt="Picture Of Me"
        layout="fullWidth"
      />
      <Article></Article>
    </main>
  );
};
export default Practice;
