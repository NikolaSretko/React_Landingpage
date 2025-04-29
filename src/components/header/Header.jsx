import PropTypes from 'prop-types';
import Nav from './Nav';
import './Header.scss';
import Button from '../button/Button';
import In from '../../assets/svg/In';

import GitHub from '../../assets/svg/GitHub';

const Header = ( ) => {
  return (
    <div>
      <header className="headerContainer">
        <Nav  />
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
        <div className="buttonContainer">
          <a href="">
            <Button />
          </a>
        </div>
        <a
        target='blank'
        href="https://github.com/NikolaSretko"><GitHub/></a>
        <a
          href="https://www.xing.com/profile/Nikola_Sretkovic059456/web_profiles"
          target="blank"
        >
          <In />
        </a>
      </header>
    </div>
  );
};

// Definieren der PropTypes für die Header-Komponente
Header.propTypes = {
  setzeDenLightModus: PropTypes.func.isRequired,
};

export default Header;
