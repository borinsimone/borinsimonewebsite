import { tab } from "@testing-library/user-event/dist/tab";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import uiImg from "../../asset/service/amelie-mourichon-sv8oOQaUb-o-unsplash.jpg";
import codingImg from "../../asset/service/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg";
import brandImg from "../../asset/service/diego-ph-fIq0tET6llw-unsplash.jpg";
function Services({ servicesRef }) {
  const mobileSize = useMediaQuery("(max-width: 768px)");
  const tabletSize = useMediaQuery("(min-width: 768px)");
  const desktopSize = useMediaQuery("(min-width: 1025px)");

  const firstSectionRef = useRef(null);
  const firstSectionInView = useInView(firstSectionRef, {
    once: true,
  });
  const secondSectionRef = useRef(null);
  const secondSectionInView = useInView(secondSectionRef, {
    once: true,
  });
  const thirdSectionRef = useRef(null);
  const thirdSectionInView = useInView(thirdSectionRef, {
    once: true,
  });
  return (
    <Container ref={servicesRef}>
      <Title>servizi</Title>
      {/* <div>
        {mobileSize && "mobile size"}
        {tabletSize && "tablet size"}
        {desktopSize && "desktop size"}
      </div> */}
      {mobileSize && (
        <MobileServicesContainer>
          <ServiceBox
            ref={firstSectionRef}
            as={motion.div}
            style={{
              transform: firstSectionInView
                ? "none"
                : "translateX(-300px)",
            }}
          >
            <ServiceNum>01.</ServiceNum>
            <ServiceTitle>ux/ui design</ServiceTitle>
            <ServiceText>
              Il design UI/UX crea interfacce digitali
              intuitive. Collaborando con il cliente,
              traduciamo le loro esigenze in soluzioni di
              design efficaci, mirando a migliorare
              l'esperienza dell'utente e ottenere risultati
              positivi per il marchio.
            </ServiceText>
          </ServiceBox>
          <ServiceBox
            ref={secondSectionRef}
            as={motion.div}
            style={{
              transform: secondSectionInView
                ? "none"
                : "translateX(300px)",
            }}
          ></ServiceBox>
          <ServiceBox
            ref={thirdSectionRef}
            as={motion.div}
            style={{
              transform: thirdSectionInView
                ? "none"
                : "translateX(-300px)",
            }}
          ></ServiceBox>
        </MobileServicesContainer>
      )}
      {tabletSize && (
        <ServicesContainerTablet>
          <ServiceBox
            className="uiux"
            ref={firstSectionRef}
            as={motion.div}
            style={{
              transform: firstSectionInView
                ? "none"
                : "translateX(-300px)",
            }}
          >
            <ServiceNum>01.</ServiceNum>
            <ServiceTitle>ux/ui design</ServiceTitle>
            <ServiceText>
              Il design UI/UX crea interfacce digitali
              intuitive. Collaborando con il cliente,
              traduciamo le loro esigenze in soluzioni di
              design efficaci, mirando a migliorare
              l'esperienza dell'utente e ottenere risultati
              positivi per il marchio.
            </ServiceText>
          </ServiceBox>
          <ServiceBox
            className="coding"
            ref={secondSectionRef}
            as={motion.div}
            style={{
              transform: secondSectionInView
                ? "none"
                : "translateX(300px)",
            }}
          >
            <ServiceNum>02.</ServiceNum>
            <ServiceTitle>coding</ServiceTitle>
            <ServiceText>
              Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Odit non saepe maxime
              officia dignissimos. Exercitationem numquam
              assumenda placeat ea eos.
            </ServiceText>
          </ServiceBox>
          <ServiceBox
            className="brandIdentity"
            ref={thirdSectionRef}
            as={motion.div}
            style={{
              transform: thirdSectionInView
                ? "none"
                : "translateX(-300px)",
            }}
          ></ServiceBox>
          <img
            className="uiuxImg"
            src={uiImg}
            style={{
              transform: firstSectionInView
                ? "none"
                : "translateX(-700px)",
              opacity: firstSectionInView ? "1" : "0",
            }}
            alt="img"
          />
          <img
            className="codingImg"
            src={codingImg}
            style={{
              transform: secondSectionInView
                ? "none"
                : "translateX(700px)",
              opacity: secondSectionInView ? "1" : "0",
            }}
            alt="img"
          />
          <img
            className="identityImg"
            src={brandImg}
            style={{
              transform: thirdSectionInView
                ? "none"
                : "translateX(-700px)",
              opacity: thirdSectionInView ? "1" : "0",
            }}
            alt="img"
          />
        </ServicesContainerTablet>
      )}
    </Container>
  );
}

export default Services;
const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #21242a;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  overflow: hidden;
  gap: 40px;
`;
const Title = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;

  background: -webkit-linear-gradient(
    120deg,
    rgba(64, 180, 118, 1) 0%,
    rgba(44, 211, 201, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const MobileServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  align-items: center;
`;
const ServiceBox = styled.div`
  width: 70%;
  max-width: 700px;
  aspect-ratio: 1;
  background: -webkit-linear-gradient(
    -60deg,
    rgba(64, 180, 118, 1) 0%,
    rgba(44, 211, 201, 1) 100%
  );
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  font-size: 1.4rem;
  font-weight: 900;
  align-items: center;
  transition: 300ms;
  position: relative;
  box-shadow: rgba(44, 211, 201, 1) 0px 5px 15px 10px;
`;
const ServiceNum = styled.div``;
const ServiceTitle = styled.div`
  text-transform: uppercase;
`;
const ServiceText = styled.div`
  font-weight: 400 !important;
  color: white;
  text-align: center;
`;
const ServicesContainerTablet = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "uiux uiuxImg"
    "codingImg coding"
    "brandIdentity identityImg";

  .uiux {
    grid-area: uiux;
    justify-self: center;
    align-self: center;
    z-index: 1;
  }

  .coding {
    grid-area: coding;
    justify-self: center;
    align-self: center;
    z-index: 1;
  }

  .brandIdentity {
    grid-area: brandIdentity;
    justify-self: center;
    align-self: center;
    z-index: 1;
  }

  .uiuxImg {
    grid-area: uiuxImg;
    justify-self: center;
    align-self: center;
    height: 300px;
    aspect-ratio: 1;
    border-radius: 50%;
    z-index: 0;
    transition: 300ms;
    transition-delay: 200ms;
  }

  .codingImg {
    grid-area: codingImg;
    justify-self: center;
    align-self: center;
    height: 300px;
    aspect-ratio: 1;
    border-radius: 50%;
    z-index: 0;
    transition: 300ms;
    transition-delay: 200ms;
  }

  .identityImg {
    grid-area: identityImg;
    justify-self: center;
    align-self: center;
    height: 300px;
    aspect-ratio: 1;
    border-radius: 50%;
    z-index: 0;
    transition: 300ms;
    transition-delay: 200ms;
  }
  img {
    box-shadow: rgba(44, 211, 201, 1) 0px 5px 15px 10px;
    @media (max-width: 1024px) {
      height: 200px !important;
    }
  }
`;
const Line = styled.div`
  position: absolute;
  height: 100%;
  width: 4px;
  background-color: #fff;
`;
