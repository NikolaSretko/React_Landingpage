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
import "./ProjectSection.scss";

const ProjectSection = () => {
  return (
    <section className="projectsContainer">
      <h2>PROJECTS</h2>
      <div>
        <Project
          projectTitle="TOKTOK(Mobile)"
          projectDescription="Unsere mobile App, gebaut im MERN-Stack, bietet eine sichere und skalierbare Plattform zum Teilen von Fotos. Ich war hauptsächlich für das robuste Backend zuständig, das Sicherheit und Performance gewährleistet. Zusätzlich habe ich das Frontend und die Fotofunktionen in der Endphase übernommen, um ein nahtloses Benutzererlebnis zu schaffen."
          technologies={[<Sass />, <React />, <MERN />]}
          repo={
            <a
              target="blank"
              href="https://github.com/canyus70/FullStack-Abschluss-Projekt-TokTok"
            >
              <GitHub />
            </a>
          }
          demo={
            <a target="blank" href="https://toktok-nks4.onrender.com/">
              <Link />
            </a>
          }
        />
        <Project
          projectTitle="Pokedex"
          projectDescription="Ein Teamprojekt, das eine Pokedex-API nutzt. Ich war Zuständig für die Hauptseite, Implementierung des Dark Modes und Erstellung von CSS-Animationen für eine interaktive Nutzererfahrung."
          technologies={[<React />, <JavaScript />, <Sass />]}
          repo={
            <a
              target="blank"
              href="https://github.com/MoniqueHeusinger/Pokedex"
            >
              <GitHub />
            </a>
          }
          demo={
            <a target="blank" href="https://super-duper-pokedex.netlify.app/">
              <Link />
            </a>
          }
        />
        <Project
          projectTitle="Sport DB"
          projectDescription=" Ein Gruppenprojekt, das eine öffentliche Sport-API nutzt, um verschiedene Sportarten zu explorieren. Mein Beitrag umfasste das Datenfetching von der API und die Implementierung eines Dropdown-Menüs für eine intuitive Navigation."
          technologies={[<React />, <JavaScript />, <Sass />]}
          repo={
            <a target="blank" href="https://github.com/KWiefel/SportsDB">
              <GitHub />
            </a>
          }
        />
      </div>
    </section>
  );
};

export default ProjectSection;
