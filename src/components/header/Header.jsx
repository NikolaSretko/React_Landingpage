import Nav from './Nav';
import './Header.scss'
import Button from '../button/Button';
import GitHub from '../../assets/svg/GitHub';
import In from '../../assets/svg/In';

const Header = ({ setzeDenLightModus }) => {

    return ( 
        <div>
        <header className='headerContainer'>
            <Nav
            setzeDenLightModus={setzeDenLightModus}
            />
            <h1>Hi, I am <span>Nikola Sretkovic.</span></h1>
            <h2>A Front End Developer.</h2>
            <p>Hello, I'm Nikola Sretkovic, a skilled photo and media designer, music producer, and recently, I've ventured into Frontend Web Development, with plans to become a certified Fullstack Developer in the coming months. I'm actively seeking exciting projects, so feel free to drop me an email to explore more about my diverse skills and experiences.</p>
            <Button 
                text="resume"/>
                <a href="https://github.com/NikolaSretko"><GitHub/></a>
                <a href="#"><In/></a>                
        </header>
        </div>
    );
}

export default Header;