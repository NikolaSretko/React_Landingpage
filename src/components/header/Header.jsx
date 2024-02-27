import Nav from './Nav';
import './Header.scss'
import Button from '../button/Button';
import In from '../../assets/svg/In';

const Header = ({ setzeDenLightModus }) => {

    return ( 
        <div>
        <header className='headerContainer'>
            <Nav
            setzeDenLightModus={setzeDenLightModus}
            />
            <h1>Hi, ich bin  <span>Nikola Sretkovic.</span></h1>
            <h2>Fullstack Developer.</h2>
            <p>
Hallo, ich bin Nikki, eine erfahrene Foto- und Mediendesignerin, Musikproduzentin und neuerdings Frontend-Webentwicklerin, die sich zum Ziel gesetzt hat, bis zum 22. März eine zertifizierte Fullstack-Entwicklerin im MERN-Stack zu werden. Meine Reise hat mich kürzlich zur großen Liebe für das Backend geführt, gerade als ich den Backend-Teil meines Studiums abschließe. Diese Entdeckung hat meine Begeisterung für technische Herausforderungen und Problemlösungen geweckt. Ich bin aktiv auf der Suche nach spannenden Projekten, die meine vielfältigen Fähigkeiten herausfordern, also zögern Sie nicht, Kontakt aufzunehmen, um mehr zu erfahren.
            </p>
            <Button text="CV"
            target="_blank" href="../../assets/Nikola Sretkovic CV .pdf"
            />
            <a target="_blank" href="https://www.linkedin.com/in/nikola-sretkovic-aa8b322a7/"><In/></a>                
        </header>
        </div>
    );
}

export default Header;