import React from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
function Services({ servicesRef }) {
  const mobileSize = useMediaQuery("(max-width: 768px)");
  const tabletSize = useMediaQuery("(min-width: 768px)");
  const desktopSize = useMediaQuery("(min-width: 1025px)");

  return (
    <Container ref={servicesRef}>
      <Title>servizi</Title>
      <div>
        {mobileSize && "mobile size"}
        {tabletSize && "tablet size"}
        {desktopSize && "desktop size"}
      </div>
      {mobileSize && (
        <ServicesContainer>
          <ServiceBox>
            <ServiceNum>01.</ServiceNum>
            <ServiceTitle>ux/ui design</ServiceTitle>
            <ServiceText>
              Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Odit non saepe maxime
              officia dignissimos. Exercitationem numquam
              assumenda placeat ea eos.
            </ServiceText>
          </ServiceBox>
          <ServiceBox></ServiceBox>
          <ServiceBox></ServiceBox>
        </ServicesContainer>
      )}
      {tabletSize && (
        <ServicesContainerTablet>
          <ServiceBox main={true}>
            <ServiceNum>01.</ServiceNum>
            <ServiceTitle>ux/ui design</ServiceTitle>
            <ServiceText>
              Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Odit non saepe maxime
              officia dignissimos. Exercitationem numquam
              assumenda placeat ea eos.
            </ServiceText>
          </ServiceBox>
          <ServiceBox side={true}></ServiceBox>
          <ServiceBox side={true}></ServiceBox>
          <Line />
        </ServicesContainerTablet>
      )}
    </Container>
  );
}

export default Services;
const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #141518;
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
const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
`;
const ServiceBox = styled.div`
  width: 80%;
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
  @media (min-width: 700px) {
    width: 40%;
    &:nth-child(odd) {
      margin-right: auto;

      margin-left: 5vw;
    }
    &:nth-child(even) {
      margin-left: auto;
      margin-right: 5vw;
    }
  }
  ${(props) => props.main && css``};
  ${(props) => props.side && css``};
`;
const ServiceNum = styled.div``;
const ServiceTitle = styled.div`
  text-transform: uppercase;
`;
const ServiceText = styled.div`
  font-weight: 400 !important;
  color: white;
`;
const ServicesContainerTablet = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
`;
const Line = styled.div`
  position: absolute;
  height: 100%;
  width: 4px;
  background-color: #fff;
`;
