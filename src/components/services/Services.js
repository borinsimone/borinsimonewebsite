import { useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useMediaQuery } from 'usehooks-ts';
function Services({ servicesRef }) {
  const mobileSize = useMediaQuery('(max-width: 768px)');
  const tabletSize = useMediaQuery('(min-width: 768px)');
  const desktopSize = useMediaQuery('(min-width: 1025px)');

  const firstSectionRef = useRef(null);
  const firstSectionInView = useInView(firstSectionRef);
  const secondSectionRef = useRef(null);
  const secondSectionInView = useInView(secondSectionRef);
  const thirdSectionRef = useRef(null);
  const thirdSectionInView = useInView(thirdSectionRef);
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
          <ServiceBox>
            <ServiceNum>01.</ServiceNum>
            <ServiceTitle>ux/ui design</ServiceTitle>
            <ServiceText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit non
              saepe maxime officia dignissimos. Exercitationem numquam assumenda
              placeat ea eos.
            </ServiceText>
          </ServiceBox>
          <ServiceBox></ServiceBox>
          <ServiceBox></ServiceBox>
        </MobileServicesContainer>
      )}
      {tabletSize && (
        <ServicesContainerTablet>
          <ServiceBox
            main={true}
            ref={firstSectionRef}
            style={{
              transform: firstSectionInView ? 'none' : 'translateY(200px)',
              opacity: firstSectionInView ? 1 : 0,
              transition: '500ms ease-out',
            }}
          >
            <ServiceNum>01.</ServiceNum>
            <ServiceTitle>ux/ui design</ServiceTitle>
            <ServiceText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit non
              saepe maxime officia dignissimos. Exercitationem numquam assumenda
              placeat ea eos.
            </ServiceText>
          </ServiceBox>
          <ServiceBox
            side={true}
            ref={secondSectionRef}
            style={{
              transform: secondSectionInView ? 'none' : 'translateY(200px)',
              opacity: secondSectionInView ? 1 : 0,
              transition: '500ms ease-out',
            }}
          ></ServiceBox>
          <ServiceBox
            side={true}
            ref={thirdSectionRef}
            style={{
              transform: thirdSectionInView ? 'none' : 'translateY(200px)',
              opacity: thirdSectionInView ? 1 : 0,
              transition: '500ms ease-out',
            }}
          ></ServiceBox>
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
const MobileServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
`;
const ServiceBox = styled.div`
  width: 70%;
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
  text-align: center;
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
