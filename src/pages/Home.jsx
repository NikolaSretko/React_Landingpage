
import Header from '../components/header/Header';
import ProjectSection from '../components/projectsection/ProjectSection';
import SkillSection from '../components/skillsection/SkillSection';
import ContactSection from '../components/contact/ContactSection';
import Footer from '../components/footer/Footer';
import './Home.scss';

const Home = () => {



  return (
    <div >
      <Header  />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
