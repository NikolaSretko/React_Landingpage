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
        <h2>Fullstack Developer, Projekt Manager und Consultant</h2>
        <p>
          Hallo, ich bin Nikola – leidenschaftlicher Fullstack-Entwickler, Mediendesigner und kreativer Problemlöser.
In den letzten Jahren durfte ich für verschiedene Unternehmen spannende Projekte umsetzen und dabei wertvolle Erfahrungen sammeln – vom Aufbau komplexer Webanwendungen bis hin zur technischen Beratung im Einsatz neuer Tools.

Ich habe ein starkes Gespür dafür entwickelt, mich blitzschnell in neue Systeme einzuarbeiten und Unternehmen dabei zu unterstützen, moderne Technologien effizient und praxisnah in bestehende Prozesse zu integrieren. Besonders die Kombination aus technischer Tiefe und nutzerzentriertem Design begeistert mich jeden Tag aufs Neue.

Lass uns gerne sprechen, wenn du Impulse, Umsetzungspower oder kreative Lösungen brauchst.
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
