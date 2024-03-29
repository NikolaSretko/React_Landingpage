import Dark from '../../assets/svg/Dark';
import './Nav.scss'

const Nav = ({ setzeDenLightModus }) => {

        const toggleLightMode = () => {
            setzeDenLightModus(state => !state)
    };
    
    return(
        <nav className='navbar'>
            <a href="#">SN.</a>
            <ul>
                <div onClick={toggleLightMode}>
                <Dark/>
                </div>
            </ul>
        </nav>
    );
}


export default Nav;
