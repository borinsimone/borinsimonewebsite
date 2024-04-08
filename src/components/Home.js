import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
} from 'react-icons/ai';
import { CiMenuFries } from 'react-icons/ci';
import { AnimatePresence, delay, motion } from 'framer-motion';
import image from '../asset/Group 78bg.png';
import helloimg from '../asset/Waving Hand Emoji.png';
import avatar from '../asset/Group 86.png';
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
      name: 'home',
      ref: homeRef,
    },
    {
      name: 'about',
      ref: aboutRef,
    },
    {
      name: 'servizi',
      ref: servicesRef,
    },
    {
      name: 'progetti',
      ref: projectRef,
    },
    {
      name: 'contatti',
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
          <IconContainer
            href='https://www.instagram.com/borin__simone/'
            target='_blank'
          >
            <InstaIcon />
          </IconContainer>
          <Line />
          <IconContainer
            href=''
            target='_blank'
          >
            <LinkedIcon />
          </IconContainer>
          <Line />
          <IconContainer
            href=''
            target='_blank'
          >
            <FacebookIcon />
          </IconContainer>
        </SocialLinks>
        <DesktopLinks>
          {menuLinks.map((item, i) => (
            <DesktopLinksItem
              key={i}
              onClick={() => {
                item.ref.current.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              {item.name}
            </DesktopLinksItem>
          ))}
        </DesktopLinks>
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
                    behavior: 'smooth',
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
        <span className='textConatiner'>
          <Text>
            Ciao!
            <HandEmoji src={helloimg} />
            Io sono
          </Text>
          <Text>
            <span>Simone Borin</span>
          </Text>
          <SubText>FrontEnd Developer & UX/UI Designer</SubText>
          <BtnContainer>
            <Btn
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                aboutRef.current.scrollIntoView({
                  behavior: 'smooth',
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
                  behavior: 'smooth',
                })
              }
            >
              <div>
                <span>Contattami</span>
              </div>
            </BtnContact>
          </BtnContainer>
        </span>
        <HomeBg
          src={avatar}
          as={motion.img}
          initial={{ y: 400 }}
          animate={{ y: -0 }}
          exit={{ y: 400 }}
          transition={{ delay: 1 }}
        />
      </Body>
    </Container>
  );
}

export default Home;
const Container = styled.div`
  /* width: 100%;
  height: 100vh;
  height: 100svh;
  background-color: #21242a;
  padding: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; */

  background-color: #21242a;
  height: 100svh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 10px;
  /* overflow: hidden; */
`;
const Navbar = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: var(--primary-text);
  z-index: 102;
  overflow: hidden;
  position: relative;
`;
const DesktopLinks = styled.div`
  @media (max-width: 1025px) {
    display: none;
  }
  display: flex;
  justify-content: space-evenly;
  gap: 10%;
  list-style-type: none;
  position: absolute;
  left: 30%;
  width: 40%;
`;
const DesktopLinksItem = styled.div`
  text-transform: capitalize;
  cursor: pointer;
  color: white;
`;
const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;
const IconContainer = styled.a`
  border: 2px solid white;
  height: 2.5rem;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  /* @media (min-width: 760px) {
    height: 1.8rem;
  } */
`;
const Line = styled.div`
  width: 10px;
  height: 2px;
  background-color: #fff;
`;
const InstaIcon = styled(AiFillInstagram)`
  color: white;
  font-size: 1.8rem;
  /* @media (min-width: 760px) {
    font-size: 1.2rem;
  } */
`;
const LinkedIcon = styled(AiFillLinkedin)`
  color: white;
  font-size: 1.8rem;
  /* @media (min-width: 760px) {
    font-size: 1.2rem;
  } */
`;
const FacebookIcon = styled(AiFillFacebook)`
  color: white;
  font-size: 1.8rem;
  /* @media (min-width: 760px) {
    font-size: 1.2rem;
  } */
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
const MenuIconContainer = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
`;
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
  @media (min-width: 700px) {
  }
  @media (min-width: 1025px) {
  }
`;
const Body = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5svh;
  align-items: center;
  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-evenly;
    gap: 0;
  }
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
  cursor: pointer;
  background: -webkit-linear-gradient(
    0deg,
    rgba(64, 180, 118, 1) 0%,
    rgba(44, 211, 201, 1) 100%
  );
`;
const BtnContact = styled(Btn)`
  border-radius: 10px;

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
