import { useState } from "react";
import Header from '../components/header/Header'
import ProjectSection from "../components/projectsection/ProjectSection";
import SkillSection from "../components/skillsection/SkillSection"
import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/footer/Footer";

import './Home.scss'

const Home = () => {
    const [lightMode, setlightMode] = useState(false);
    console.log(lightMode);
    
    return ( 
        <div 

        className={lightMode ? "light" : "dark"}>

        <Header 
        setzeDenLightModus={setlightMode} />

        <ProjectSection/>
        <SkillSection/>
        <ContactSection/>
        <Footer/>

        </div>
    );
}

export default Home;