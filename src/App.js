import styled from "styled-components";
import Home from "./components/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  FaChevronCircleUp,
  FaChevronUp,
} from "react-icons/fa";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const homeRef = useRef();
  const aboutRef = useRef();
  const servicesRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();
  const homeInView = useInView(homeRef);
  return (
    <Container>
      <Home
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        projectRef={projectRef}
        contactRef={contactRef}
        homeInView={homeInView}
      />
      <About aboutRef={aboutRef} />
      <Services servicesRef={servicesRef} />
      <Projects projectRef={projectRef} />
      <Contact contactRef={contactRef} />
      <BackToTop
        visible={homeInView}
        onClick={() =>
          homeRef.current.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        <ChevronIcon />
        back
        <span>to</span>
        top
      </BackToTop>
    </Container>
  );
}

export default App;
const Container = styled.div`
  height: fit-content;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
const BackToTop = styled.div`
  position: fixed;
  top: 90svh;
  right: 20px;
  height: 5rem;
  aspect-ratio: 1;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 50%;
  opacity: ${(props) => (props.visible ? 0 : 1)};
  transition: opacity 300ms ease-in-out;
  background: -webkit-linear-gradient(
    120deg,
    rgba(64, 180, 118, 1) 0%,
    rgba(44, 211, 201, 1) 100%
  );
  text-align: center;
  line-height: 0.9rem;
  color: #fff;
  text-transform: uppercase;
  padding-top: 10px;
  span {
    font-size: 0.6rem;
  }
`;
const ChevronIcon = styled(FaChevronUp)`
  position: absolute;
  top: 5px;
`;
