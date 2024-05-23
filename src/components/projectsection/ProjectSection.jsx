import GitHub from '../../assets/svg/GitHub';
import JavaScript from '../../assets/svg/JavaScript';
import Link from '../../assets/svg/Link';
import MERN from '../../assets/svg/MERN';
import React from '../../assets/svg/React';
import Sass from '../../assets/svg/SCSS';
import Project from './Project';
import './ProjectSection.scss';

const ProjectSection = () => {
  return (
    <section className="projectsContainer">
      <h2>PROJECTS</h2>
      <div>
        <Project
          projectTitle="TOKTOK(Mobile)"
          projectDescription="Unsere mobile App, gebaut im MERN-Stack, bietet eine sichere und skalierbare Plattform zum Teilen von Fotos. Ich war hauptsächlich für das robuste Backend zuständig, das Sicherheit und Performance gewährleistet. Zusätzlich habe ich das Frontend und die Fotofunktionen in der Endphase übernommen, um ein nahtloses Benutzererlebnis zu schaffen. Da wir einen kostenlosen NoSQL-Dienstleister verwenden, kann das initiale Laden der mobilen Web-App verzögert sein. In dieser Zeit kann man über den Desktop bereits die mobile Ansicht aktivieren."
          technologies={[
            <Sass key="sass" />,
            <React key="react" />,
            <MERN key="mern" />,
          ]}
          repo={
            <a
              href="https://github.com/canyus70/FullStack-Abschluss-Projekt-TokTok"
              target="_blank"
              rel="noreferrer"
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
          projectDescription="Ein Teamprojekt, das eine Pokedex-API nutzt. Ich war zuständig für die Hauptseite, einschließlich der Implementierung des Dark Modes und der Erstellung von CSS-Animationen. Diese Animationen sorgen für eine interaktive und ansprechende Nutzererfahrung. Zusätzlich habe ich sicher gestellt, dass die Hauptseite sowohl funktional als auch ästhetisch ansprechend ist, wodurch die Benutzerfreundlichkeit und das visuelle Erlebnis verbessert wurden."
          technologies={[
            <React key="react" />,
            <JavaScript key="javascript" />,
            <Sass key="sass" />,
          ]}
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
          projectDescription=" Ein Gruppenprojekt, das eine öffentliche Sport-API nutzt, um verschiedene Sportarten zu explorieren. Mein Beitrag umfasste das Datenfetching von der API sowie die Implementierung eines benutzerfreundlichen Dropdown-Menüs für eine intuitive Navigation. Zusätzlich habe ich die API-Daten so aufbereitet, dass sie leicht verständlich und optisch ansprechend präsentiert werden, was die Nutzererfahrung erheblich verbessert hat."
          technologies={[
            <React key="react" />,
            <JavaScript key="javascript" />,
            <Sass key="sass" />,
          ]}
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
