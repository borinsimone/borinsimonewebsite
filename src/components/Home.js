import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
} from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import {
  AnimatePresence,
  delay,
  motion,
} from "framer-motion";
import image from "../asset/Group 78bg.png";
import helloimg from "../asset/Waving Hand Emoji.png";
import avatar from "../asset/Group 86.png";
function Home({
  menuOpen,
  setMenuOpen,
  homeRef,
  aboutRef,
  servicesRef,
  projectRef,
  contactRef,
  homeInView,
}) {
  let menuLinks = [
    {
      name: "home",
      ref: homeRef,
    },
    {
      name: "about",
      ref: aboutRef,
    },
    {
      name: "progetti",
      ref: projectRef,
    },
    {
      name: "servizi",
      ref: servicesRef,
    },
    {
      name: "contatti",
      ref: contactRef,
    },
  ];
  useEffect(() => {
    if (!homeInView) {
      setMenuOpen(false);
    }
  }, [homeInView]);

  return (
    <Container ref={homeRef}>
      <Navbar>
        <SocialLinks
          as={motion.div}
          initial={{ y: -100 }}
          animate={{ y: -0 }}
          exit={{ y: -100 }}
        >
          <IconContainer>
            <InstaIcon />
          </IconContainer>
          <Line />
          <IconContainer>
            <LinkedIcon />
          </IconContainer>
          <Line />
          <IconContainer>
            <FacebookIcon />
          </IconContainer>
        </SocialLinks>
        <AnimatePresence>
          {menuOpen ? (
            <MenuIconContainer
              as={motion.div}
              initial={{ x: 100 }}
              animate={{ x: -0 }}
              exit={{ x: 100 }}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <MenuCloseIcon />
            </MenuIconContainer>
          ) : (
            <MenuIconContainer
              as={motion.div}
              initial={{ x: 100 }}
              animate={{ x: -0 }}
              exit={{ x: 100 }}
              onClick={() => {
                setMenuOpen(true);
              }}
            >
              <MenuIcon />
            </MenuIconContainer>
          )}
        </AnimatePresence>
      </Navbar>
      <AnimatePresence>
        {menuOpen && (
          <MenuLinkContainer
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {menuLinks.map((link, i) => (
              <MenuLink
                key={link}
                onClick={() => {
                  link.ref.current.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMenuOpen(false);
                }}
              >
                {link.name}
              </MenuLink>
            ))}
          </MenuLinkContainer>
        )}
      </AnimatePresence>
      <Body>
        <Text>
          Ciao!
          <HandEmoji src={helloimg} />
          Io sono
        </Text>
        <Text>
          <span>Simone Borin</span>
        </Text>
        <SubText>
          FrontEnd Developer & UX/UI Designer
        </SubText>
        <BtnContainer>
          <Btn
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              aboutRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            scopri di più
          </Btn>
          <BtnContact
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              contactRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <div>
              <span>Contattami</span>
            </div>
          </BtnContact>
        </BtnContainer>
      </Body>
      <HomeBg
        src={avatar}
        as={motion.img}
        initial={{ y: 400 }}
        animate={{ y: -0 }}
        exit={{ y: 400 }}
        transition={{ delay: 1 }}
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  height: 100svh;
  background-color: #21242a;
  padding: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`;
const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;
const IconContainer = styled.div`
  border: 2px solid white;
  height: 2.5rem;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
const Line = styled.div`
  width: 10px;
  height: 2px;
  background-color: #fff;
`;
const InstaIcon = styled(AiFillInstagram)`
  color: white;
  font-size: 1.8rem;
`;
const LinkedIcon = styled(AiFillLinkedin)`
  color: white;
  font-size: 1.8rem;
`;
const FacebookIcon = styled(AiFillFacebook)`
  color: white;
  font-size: 1.8rem;
`;
const MenuIcon = styled(CiMenuFries)`
  color: white;
  font-size: 1.8rem;

  stroke-width: 1px;
`;
const MenuCloseIcon = styled(AiOutlineClose)`
  color: white;
  font-size: 1.8rem;
  stroke-width: 2px;
`;
const MenuIconContainer = styled.div``;
const MenuLinkContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 5svh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);

  z-index: 99;
`;
const MenuLink = styled.div`
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  color: black;
  font-size: 1.7rem;
`;
const HomeBg = styled.img`
  width: 90%;
  opacity: 0.7;
  position: absolute;
  bottom: 0svh;
  z-index: 0;
  @media (min-width: 700px) {
    width: 60%;
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: center;
  z-index: 10;
`;
const Text = styled.div`
  color: white;
  font-size: 3.8rem;
  margin-top: 20px;

  span {
    font-weight: 800;
    font-size: 4rem;
    letter-spacing: 2px;
    background: -webkit-linear-gradient(
      0deg,
      rgba(64, 180, 118, 1) 0%,
      rgba(44, 211, 201, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  /* background-color: #fff; */
`;
const HandEmoji = styled.img`
  height: 3rem;
  margin: 0 0.6rem;
`;
const SubText = styled.div`
  color: white;
  margin-bottom: 20px;
`;
const BtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const Btn = styled.div`
  color: #21242a;
  font-weight: 900;
  font-size: 15px;
  padding: 10px 24px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  text-transform: uppercase;
  background: -webkit-linear-gradient(
    0deg,
    rgba(64, 180, 118, 1) 0%,
    rgba(44, 211, 201, 1) 100%
  );
`;
const BtnContact = styled(Btn)`
  border-radius: 10px;
  /* border: 4px solid transparent;
  border-image: linear-gradient(
      120deg,
      rgba(64, 180, 118, 1) 0%,
      rgba(44, 211, 201, 1) 100%
    )
    10; */

  background: -webkit-linear-gradient(
    120deg,
    rgba(64, 180, 118, 1) 0%,
    rgba(44, 211, 201, 1) 100%
  );
  span {
    background: -webkit-linear-gradient(
      120deg,
      rgba(64, 180, 118, 1) 0%,
      rgba(44, 211, 201, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  padding: 5px 8px;
  div {
    background: #21242a;
    padding: 10px 24px;
    border-radius: 10px;
  }
`;
