
import CSS from "../../assets/svg/CSS";
import GitHub from "../../assets/svg/GitHub";
import HTML5 from "../../assets/svg/HTML5";
import JavaScript from "../../assets/svg/JavaScript";
import Link from "../../assets/svg/Link";
import MERN from "../../assets/svg/MERN";
import React from "../../assets/svg/React";
import Sass from "../../assets/svg/SCSS";
import Tailwind from "../../assets/svg/Tailwind";
import Project from "./Project";
import './ProjectSection.scss'

const ProjectSection = () => {
    return ( 
        <section className="projectsContainer">
            <h2>PROJECTS</h2>
            <div>
            <Project
            projectTitle="Movie DB"
            projectDescription="Eine MERN-Stack-Anwendung zum Anzeigen, Erstellen, Bearbeiten und Favorisieren von Filmen. Ich habe die Struktur für das Frontend aufgesetzt und das leistungsstarke Backend eigenständig mit Express und MongoDB entwickelt."
            technologies={[ <Sass/>, <React/>,<MERN/>,]}
            repo= {<a target="blank" href="https://github.com/NikolaSretko/Movie_DB-MERN"><GitHub/></a>}
            />
            <Project
            projectTitle="Pokedex"
            projectDescription="Ein Teamprojekt, das eine Pokedex-API nutzt. Ich war Zuständig für die Hauptseite, Implementierung des Dark Modes und Erstellung von CSS-Animationen für eine interaktive Nutzererfahrung."
            technologies={[<React/>, <JavaScript/>, <Sass/>]}
            repo= {<a target="blank" href="https://github.com/MoniqueHeusinger/Pokedex"><GitHub/></a>}
            demo={<a target="blank" href="https://super-duper-pokedex.netlify.app/"><Link/></a>}
            />
            <Project
            projectTitle="Sport DB"
            projectDescription=" Ein Gruppenprojekt, das eine öffentliche Sport-API nutzt, um verschiedene Sportarten zu explorieren. Mein Beitrag umfasste das Datenfetching von der API und die Implementierung eines Dropdown-Menüs für eine intuitive Navigation."
            technologies={[<React/>, <JavaScript/>, <Sass/>]}
            repo= {<a target="blank" href="https://github.com/KWiefel/SportsDB"><GitHub/></a>}
            />
            </div>  
        </section>
    );
}

export default ProjectSection;
