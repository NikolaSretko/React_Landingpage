
import { useEffect, useState } from 'react';
import Dark from '../../assets/svg/Dark';
import './Nav.scss';

const Nav = ({ setzeDenLightModus }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const toggleLightMode = () => {
        setzeDenLightModus(state => !state);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Update navbar style when scrolled
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Update active section based on scroll position
            const sections = ['home', 'projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 300;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    };
    
    return(
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <a href="#" onClick={() => scrollToSection('home')} className="logo">SN.</a>
            <ul className="nav-links">
                <li>
                    <a 
                        href="#projects" 
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('projects');
                        }}
                        className={activeSection === 'projects' ? 'active' : ''}
                    >
                        Projekte
                    </a>
                </li>
                <li>
                    <a 
                        href="#skills" 
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('skills');
                        }}
                        className={activeSection === 'skills' ? 'active' : ''}
                    >
                        Skills
                    </a>
                </li>
                <li>
                    <a 
                        href="#contact" 
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('contact');
                        }}
                        className={activeSection === 'contact' ? 'active' : ''}
                    >
                        Kontakt
                    </a>
                </li>

            </ul>
        </nav>
    );
};

export default Nav;
