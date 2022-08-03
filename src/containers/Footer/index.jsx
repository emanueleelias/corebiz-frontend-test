import { images } from "../../constants";
import "./footer.scss";

const Footer = () => {

  return (
    <footer className="footer__container">
        <div className="container footer">

          <div className="footer__ubication">
            <h3>Ubicación</h3>
            <div className="divisor"></div>
            <span>Avenida Andrómeda, 2000. Bloco 6 e 8</span>
            <span>Alphavile SP</span>
            <span>brazil@corebiz.ag</span>
            <span>+55 11 3090 1039</span>
          </div>

          <div className="footer__contact">
            <button> 
              <img src={images.email} alt="Icono de un sobre" />
              CONTÁCTANOS
            </button>
            <button>
              <img src={images.mobile} alt="Icono de auricular" />
              HABLA CON UN CONSULTOR
            </button>
          </div>

          <div className="footer__social">
            <div className="footer__social-corebiz">
              <span>Desarrollado por</span>
              <img src={images.logoWhite} alt="Logo de corebiz" />
            </div>
            <div className="footer__social-vtex">
              <span>Powered by</span>
              <img src={images.vtex} alt="Logo de vtex" />
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer;