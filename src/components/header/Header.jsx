import PropTypes from 'prop-types';
import Nav from './Nav';
import './Header.scss';
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
        <h2>Fullstack Developer mit Fokus auf Web-Anwendungen & KI-gestützte Prozesslösungen</h2>
        <p>
          Ich bin Fullstack-Entwickler mit Fokus auf die Entwicklung skalierbarer Weblösungen. Mein Schwerpunkt liegt auf JavaScript-Technologien (MERN-Stack), sauberer Codearchitektur und der Kombination aus technischer Tiefe und pragmatischer Lösungsfindung.
          Ich entwickle komplette Anwendungen von der Konzeption bis zur produktiven Auslieferung – mit Business-Fokus und Developer-Herz.
        </p>
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
