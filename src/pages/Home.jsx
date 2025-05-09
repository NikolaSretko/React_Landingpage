import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import ProjectSection from '../components/projectsection/ProjectSection';
import SkillSection from '../components/skillsection/SkillSection';
import ContactSection from '../components/contact/ContactSection';
import Footer from '../components/footer/Footer';
import './Home.scss';

const Home = () => {
  const [lightMode, setlightMode] = useState(() => {
    const savedMode = localStorage.getItem('lightMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('lightMode', JSON.stringify(lightMode));
  }, [lightMode]);

  return (
    <div className={lightMode ? 'light' : 'dark'}>
      <div id="home">
        <Header setzeDenLightModus={setlightMode} />
      </div>
      
      <div id="projects">
        <ProjectSection />
      </div>
      
      <div id="skills">
        <SkillSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;