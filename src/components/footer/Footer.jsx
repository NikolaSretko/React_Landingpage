import Autor from "./Autor";

const Footer = () => {
    return ( 
        <footer style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
        }}>
            <Autor autor="Nikola Sretkovic" />
        </footer>
     );
}
 
export default Footer;