import * as React from "react";
import Article from "../components/Article";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Quote from "../components/Quote";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Footer from "../components/Footer";
import Button from "../components/Button";
import MobileHero from "../components/MobileHero";

const Wrapper = styled.main`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
  }
`;
const Split = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
  }
`;

const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    padding: 3em;
  }
`;
const MobileHider = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    padding-right: 5em;
  }
`;
const Hider = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
const Row = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
  }
`;
const ButtonWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    padding-top: 4em;
  }
`;
const ButtonHider = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Text = styled.div`
  @media screen and (min-width: 768px) {
    width: 260%;
  }
`;
const TextFooter = styled.div`
  @media screen and (min-width: 768px) {
    flex-direction: reverse-row;
    display: flex;
    flex-flow: column nowrap;
    padding-left: 2em;
    width: 60%;
  }
  @media screen and (min-width: 1500px) {
    padding-top: 5em;
  }
`;
const H3 = styled.h3`
  @media screen and (min-width: 768px) {
    font-size: 2em;
    font-weight: bold;
    padding-bottom: 0.5em;
    line-height: 1.5em;
  }
`;
const PicWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 90%;
  }
  @media screen and (min-width: 1500px) {
    width: 100%;
  }
`;
const MobileHeroWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const StyleFooter = styled((props) => <Footer {...props} />)``;

// markup
const IndexPage = () => {
  return (
    <Layout
      pageMeta={{
        title: "Family Roots Law,",
        keywords: [
          "Probate",
          "Trust",
          "Lawyer",
          "family lawyer",
          "Family Roots Law",
          "San Diego Ca",
          "Estates",
          "conservatorship",
        ],
        description:
          "Trust and estate planning, Get all your legal needs sorted by a qualified family lawyer. We offer personal and professional services to help you with your estate planning.",
      }}
    >
      <Wrapper>
        <Hider>
          <Hero />
        </Hider>
        <MobileHeroWrapper>
          <MobileHero />
        </MobileHeroWrapper>
        <Container>
          <Split>
            <Article title="A Living Trust That Lasts Forever">
              There are few things in life that matter to us more than our
              legacy and trust. We spend our lives working and building
              something we hope to pass on to our loved ones. It takes a
              lifetime to build a legacy, and we want to know that our estate,
              trust, and will is safe and secure. However, when the time comes
              to divide an estate, the process can be stressful, emotional, and
              uncomfortable. In some cases, there are unforeseen pitfalls that
              blindside families and can make your situation extremely
              challenging. That is why I want to start working with you now to
              plan your trust and to make sure I can be your advocate when that
              day comes. I want to meet with you regularly to discuss your
              plans, for when the moment arrives. I will step in and handle this
              matter so your family members do not have to go through the
              headaches, piles of paperwork, and uncomfortable issues that often
              arise during this crucial time. With my personal approach, you can
              rest assured that your legacy will be protected.
            </Article>
            <Quote author="Mindy Galindo">
              With my personal apporach, you can rest assured that your legacy
              will be protected.
            </Quote>
          </Split>
          <PicWrapper>
            <StaticImage
              loading="eager"
              placeholder="blurred"
              src="../images/Family.png"
              alt="Picture of Family"
              layout="constrained"
            />
          </PicWrapper>
        </Container>
        <Article title="Build A Custom Experience">
          <Row>
            <MobileHider>
              <StaticImage
                loading="eager"
                placeholder="blurred"
                src="../images/Kid.png"
                alt="Picture of Family"
                layout="constrained"
              />
            </MobileHider>
            <Text>
              <H3>Made for your Family</H3>
              Estate planning is an intimate, family matter. I want you to know
              and trust me, so you can be confident I am working on your behalf.
              My experience in this field has taught me that my work is about
              relationships; therefore, I have made relationship building the
              hallmark of my approach. I will work with you to design a custom
              experience that is tailored to your particular situation and your
              particular needs.
              <ButtonWrapper>
                <Button tag="Services" route="/services" />
              </ButtonWrapper>
            </Text>
          </Row>
        </Article>
        <ButtonHider>
          <Button tag="Services" route="/services" />
        </ButtonHider>
        <Row>
          <TextFooter>
            <Article title="Protect Your Family">
              To begin the process of protecting your family, please contact me
              for an initial consultation. I can answer any questions you might
              have and explain how we can get started protecting your legacy.
            </Article>
            <ButtonWrapper>
              <Button tag="Contact Me" route="/contact" />
            </ButtonWrapper>
          </TextFooter>
          <StyleFooter pic="Footer.png" />
        </Row>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
