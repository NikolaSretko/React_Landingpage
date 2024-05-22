import Nav from "./Nav";
import "./Header.scss";
import Button from "../button/Button";
import In from "../../assets/svg/In";
import XING from "../../assets/svg/XING";

const Header = ({ setzeDenLightModus }) => {
  return (
    <div>
      <header className="headerContainer">
        <Nav setzeDenLightModus={setzeDenLightModus} />
        <h1>
          Hi, ich bin <span>Nikola Sretkovic.</span>
        </h1>
        <h2>Fullstack Developer.</h2>
        <p>
          Hallo, ich bin Nikki, ein erfahrener Foto- und Mediendesigner,
          Musikproduzent und zertifizierter Fullstack-Entwickler im MERN-Stack.
          Nach erfolgreichem Abschluss meiner Ausbildung und meiner
          Zertifizierung am 22. März arbeite ich jetzt als
          Fullstack-Softwareentwickler bei einem führenden Unternehmen für
          Lohnbuchhaltungs- und Zeitwirtschaftssysteme. Meine Reise hat meine
          Begeisterung für technische Herausforderungen und Problemlösungen
          weiter gesteigert. Ich bin immer auf der Suche nach neuen, spannenden
          Projekten, die meine vielfältigen Fähigkeiten herausfordern. Zögern
          Sie nicht, Kontakt aufzunehmen, um mehr zu erfahren.
        </p>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/nikola-sretkovic-aa8b322a7/"
        >
          <In />
        </a>
        <a
          href="https://www.xing.com/profile/Nikola_Sretkovic059456/web_profiles"
          target="blank"
        >
          <XING />
        </a>
      </header>
    </div>
  );
};

export default Header;
