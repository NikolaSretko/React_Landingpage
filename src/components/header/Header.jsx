import Nav from './Nav';
import './Header.scss'
import Button from '../button/Button';
import GitHub from '../../assets/svg/GitHub';
import Sass from '../../assets/svg/Sass';

const Header = ({ setzeDenLightModus }) => {

    return ( 
        <div>
        <header className='headerContainer'>
            <Nav
            setzeDenLightModus={setzeDenLightModus}
            />
            <h1>Hi, I am <span>Nikola Sretkovic.</span></h1>
            <h2>A Front End Developer.</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam praesentium porro nemo? Officiis suscipit aut unde architecto velit accusamus nesciunt sed eveniet voluptatum, facere quae earum inventore cupiditate non sequi!</p>
            <Button 
                text="resume"/>
                <GitHub/>
        </header>
        </div>
    );
}

export default Header;