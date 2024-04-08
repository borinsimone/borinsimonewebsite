import styled from 'styled-components';
import Home from './components/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { FaChevronCircleUp, FaChevronUp } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa6';

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
            behavior: 'smooth',
          })
        }
      >
        <ArrowIcon />
        <span>top</span>
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
  cursor: pointer;
  position: fixed;
  top: 90svh;
  /* right: -70px; */
  right: ${(props) => (props.visible ? '-120px' : '-70px')};
  opacity: ${(props) => (props.visible ? 0 : 1)};
  background: -webkit-linear-gradient(
    120deg,
    rgba(64, 180, 118, 1) 0%,
    rgba(44, 211, 201, 1) 100%
  );
  text-transform: uppercase;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
  padding-right: 20px;
  border-radius: 10px 0 0 10px;
  color: white;
  width: 120px;
  transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: -4px 4px 10px rgba(44, 211, 201, 0.4);
  &:hover {
    right: -20px;
  }

  span {
    width: 50px;
  }

  @media (max-width: 700px) {
    transform: scale(1.4);
  }
`;
const ArrowIcon = styled(FaArrowUp)`
  width: 50px;
`;
