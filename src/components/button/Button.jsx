import './Button.scss';
const Button = () => {
  return (
    <div className="button-container">
      <a
        download="Nikola_Sretkovic_CV"
        className="button"
        href="https://res.cloudinary.com/dxphdtwvh/image/upload/f_auto,q_auto/v1/CV/hl6svavdikjn3gxetduh"
        target="_blank"
        rel="noopener noreferrer"
      >
        CV
      </a>
      <a
        download="Another_Document"
        className="button"
        href="https://res.cloudinary.com/dxphdtwvh/image/upload/f_auto,q_auto/v1/CV/nming9wunydbjjfecwmn"
        target="_blank"
        rel="noopener noreferrer"
      >
        s/w
      </a>
    </div>
  );
};

export default Button;
