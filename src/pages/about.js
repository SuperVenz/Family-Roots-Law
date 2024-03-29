import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Article from "../components/Article";
import styled from "styled-components";
import Button from "../components/Button";
import Layout from "../components/Layout";
import AboutFooter from "../components/AboutFooter";
const Margin = styled.div`
  padding-left: 2em;
`;
const Row = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    flex-direction: row-reverse;
    margin-top: 2em;
  }
`;
const Container = styled.div`
  @media screen and (min-width: 768px) {
    width: 200%;
  }
`;
const PicWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 200%;
  }
`;
const PicWrapperMegan = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
    aspect-ratio: 1;
  }
`;
const Text = styled.div`
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

const AboutPage = () => {
  return (
    <Layout
      pageMeta={{
        title: "About",
        keywords: [
          "Probate",
          "Trust",
          "Lawyer",
          "About",
          "Family Roots Law",
          "San Diego Ca",
        ],
        description:
          "Trust and estate planning that would ensure your family’s future is safe.",
      }}
    >
      <main>
        <Row>
          <PicWrapper>
            <StaticImage
              loading="eager"
              placeholder="blurred"
              src="../images/About.png"
              alt="Picture Of Me"
              layout="constrained"
            />
          </PicWrapper>
          <Container>
            <Article title="Hello, I am Mindy Galindo, Your Family Legacy and Life Lawyer.">
              My goal is to be your trusted advisor and to help individuals,
              couples, and families consciously plan for the unknown, ensuring
              their loved ones are protected. I realize the legal community can
              be stale and impersonal. When I founded Family Roots Law, APC, I
              wanted to ensure that my clients were able to receive a more
              authentic and down-to-earth approach when discussing such a
              sensitive topic. As a mother of four children ranging from ages
              nine to twenty-three, I have first-hand knowledge of the
              complexity of creating a trust that will protect my children in
              all their life stages. As a probate litigator, I have personal
              experience of the potential risks to our estate, regardless of the
              value of your assets when your loved ones are involved. I am a
              North County, San Diego native; I grew up in the City of Vista and
              reside in the community of Oceanside. I attended California
              Western School of Law, and upon passing the California Bar, I
              worked for a large volume personal injury firm, where I realized
              that death does not have an age. I then joined an Orange County
              probate and litigation firm, where I learned that people needed to
              be prepared to protect their loved ones from falling victim to the
              probate court system. In my spare time, I love spending time with
              my family including six siblings and twenty nieces and nephews.
              I’ll never turn down a slice of cake, and my favorite article of
              clothing is my pajamas! I Look forward to meeting you.
            </Article>
            <Margin>
              <StaticImage
                loading="eager"
                placeholder="blurred"
                src="../images/Signature.png"
                alt="Signature"
                layout="fixed"
                width={250}
                height={100}
              />
            </Margin>
          </Container>
        </Row>
        <Row>
          <PicWrapperMegan>
            <StaticImage
              loading="eager"
              placeholder="blurred"
              src="../images/Megan.jpg"
              alt="Picture Of Me"
              layout="constrained"
            />
          </PicWrapperMegan>
          <Container>
            <Article title="Megan Gooing, Of Counsel Attorney and Counselor at Law, focuses on estate and trust litigation">
              Megan Gooing, Of Counsel Attorney and Counselor at Law, focuses on
              estate and trust litigation, beneficiary representation, probate,
              estate planning, trust funding, and conservatorships. Megan Gooing
              is a licensed California Bar Association attorney and a graduate
              of Chapman University, Dale E. Fowler School of Law. Megan also
              has a degree in Marketing from New Mexico State University. While
              in law school, Megan received the CALI award for her work in the
              Elder Law Clinic, which focused on estate planning,
              conservatorships, and guardianship nominations. Megan is
              passionate about serving her community, which is why she has
              dedicated her career to helping people solve their problems with
              understanding and personal attention. Because of Megan’s estate
              planning work, she offers a unique perspective to estate and trust
              litigation. She takes pride in fighting for her clients and
              approaches all areas of the law with determination.
            </Article>
          </Container>
        </Row>
        <Row>
          <Text>
            <Article title="Let's Talk">
              If you would like to find out more about the services that I offer
              and get started planning your estate today, then please contact
              me. Together, we can begin the process of estate planning that
              would ensure your family’s future is safe.
            </Article>
            <Button tag="Contact Me" route="/contact" />
          </Text>
          <AboutFooter />
        </Row>
      </main>
    </Layout>
  );
};
export default AboutPage;
