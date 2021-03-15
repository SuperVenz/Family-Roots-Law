import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Article from "../components/Article";
import styled from "styled-components";
import Button from "../components/Button";
import Layout from "../components/Layout";
const Title = styled.h1`
  font-weight: bold;
  font-size: 2.5em;
  line-height: 1em;
  padding-top: 1em;
  padding-left: 1em;
`;
const Block = styled.div`
  margin-bottom: 5em;
`;
const SubTitle = styled.p`
  padding-bottom: 1em;
  font-weight: bold;
  font-size: 1.5em;
  line-height: 1em;
`;
const ServicesPage = () => (
  <Layout>
    <main>
      <StaticImage
        loading="eager"
        placeholder="blurred"
        src="../images/Practice.png"
        alt="Picture Of Me"
        layout="fullWidth"
      />
      <Title>Practice Areas</Title>
      <Article>
        <SubTitle>Estate Planning</SubTitle>I will help you plan how you want to
        pass on your Family Wealth. In this process, we will not only address
        your financial assets, but also your intellectual, spiritual, and human
        assets: who you are and what is important to you and how you can leave a
        legacy of love that goes far beyond money.
      </Article>
      <Article>
        <SubTitle>Trust and Probate Admininstration</SubTitle>I can handle all
        of the legal matters related to opening probate and to distributing and
        disbursing a trust.
      </Article>
      <Article>
        <SubTitle>Limited Conservatorships and Conservatorships</SubTitle>
        In cases where a family member turns 18, but still requires legal
        representation, I can provide this service and make sure that things
        happen the way they are supposed to.
      </Article>
      <Article>
        <SubTitle>Beneficiary Representation</SubTitle>I can help make sure that
        inheritances are secured by making sure that there is proper
        notification and representation. Likewise, I can handle any disagreement
        or conflicts that may arise in the process.
      </Article>
      <Block />
      <Article title="We Can Protect Your Family">
        To begin the process of protecting your family, please contact me for an
        initial consultation. I can answer any questions you might have and
        explain how we can get started protecting your legacy.
      </Article>
      <Button tag="Contact Me" />
    </main>
  </Layout>
);
export default ServicesPage;
