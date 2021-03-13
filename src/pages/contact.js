import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Article from "../components/Article";
import Button from "../components/Button";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

const Title = styled.h1`
  font-weight: bold;
  font-size: 2.5em;
  line-height: 1em;
  padding-top: 1em;
  padding-left: 1em;
`;
const SubTitle = styled.h3`
  padding-bottom: 1em;
  font-weight: bold;
  font-size: 1.5em;
  line-height: 1em;
`;
const ContactPage = () => (
  <Layout>
    <main>
      <StaticImage
        loading="eager"
        placeholder="blurred"
        src="../images/Contact.png"
        alt="Picture Of Me"
        layout="fullWidth"
      />
      <Title>Contact Me</Title>
      <Article>
        <SubTitle>Phone Call</SubTitle>
        You can reach my office at (442) 500-5177, Monday – Friday between the
        hours. 8:00am – 5:30pm (PC)
        <br></br>
        <a href="tel:4425005177">(442) 500-5177</a>
      </Article>

      <Article>
        <SubTitle>Email Discussion</SubTitle>
        If you need to contact me through email, you can reach me at
        <a href="mailto: Mindy@familyrootslaw.com"> Mindy@familyrootslaw.com</a>
      </Article>
      <Article>
        <SubTitle>Schedule A Consultation</SubTitle>
        Please provide the information below to schedule a consultation.
      </Article>
      <ContactForm />
    </main>
  </Layout>
);

export default ContactPage;
