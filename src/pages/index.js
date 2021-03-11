import * as React from "react";
import Article from "../components/Article";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Quote from "../components/Quote";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Footer from "../components/Footer";
import Button from "../components/Button";

const Wrapper = styled.main``;

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Hero />
        <Article title="A Legacy That Lasts Forever">
          There are few things in life that matter to us more than our legacy.
          We spend our lives working and building something we hope to pass on
          to our loved ones. It takes a lifetime to build a legacy, and we want
          to know that our legacy is safe and secure. However, when the time
          comes to divide an estate, the process can be stressful, emotional,
          and uncomfortable. It some cases, there are unforeseen pitfalls that
          blindside families and make the situation extremely challenging. That
          is why I want to start working with you now to plan your legacy and to
          make sure I can be your advocate when that day comes. I want to meet
          with you regularly to discuss your plans, then when the moment
          arrives, I want to step in and handle this matter so your family
          members do not have to go through the headaches, piles of paperwork,
          and uncomfortable issues that often arise during this crucial time.
          With my personal approach, you can rest assured that your legacy will
          be protected.
        </Article>
        <Quote author="Mindy Galindo">
          With my personal apporach, you can rest assured that your legacy will
          be protected.
        </Quote>
        <StaticImage
          loading="eager"
          placeholder="blurred"
          src="../images/Family.png"
          alt="Picture of Family"
          layout="fullWidth"
        />
        <Article title="Build A Custom Experience">
          <h3>Made for your Family</h3>
          Estate planning is an intimate, family matter. This is why I like to
          visit my clients in their own homes and really get to know them. I
          want you to know and trust me, so you can be confident I am working on
          your behalf. My experience in this field has taught me that my work is
          about relationships; therefore, I have made relationship building the
          hallmark of my approach. Once I establish a personal relationship with
          you, I will work with you to design a custom experience that is
          tailored to your particular situation and your particular needs.
        </Article>
        <Button tag="Learn More" />
        <Article title="Protect Your Family">
          To begin the process of protecting your family, please contact me for
          an initial consultation. I can answer any questions you might have and
          explain how we can get started protecting your legacy.
        </Article>
        <Button tag="Contact Me" />
        <Footer />
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
