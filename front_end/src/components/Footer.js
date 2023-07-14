import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../assets/images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white mx-3">Suscribete para mejores beneficios</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Escribe tu correo <3"
                  aria-label="Escribe tu correo <3"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribirse
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contacta con nosotros</h4>
              <div>
                <address className="text-white fs-6">
                Coronel Rodríguez 273, Ciudad <br />
                M5500
                </address>
                <a
                  href="tel:261 333 0000"
                  className="mt-3 d-block mb-1 text-white"
                  style={{ pointerEvents: "none" }}
                >
                  261 333 0000
                </a>
                <a
                  href="mailto:augusto.94.castro@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  augusto.94.castro@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white mx-3" href="https://www.linkedin.com/in/augusto-castro/" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white mx-3" href="https://www.instagram.com/utn.regional.mendoza/" target="_blank" rel="noopener noreferrer">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white mx-3" href="https://github.com/Cassst" target="_blank" rel="noopener noreferrer">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white mx-3" href="https://www.youtube.com/@ColmenaTEC" target="_blank" rel="noopener noreferrer">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Información</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                Política de confidencialidad
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                Política de reembolso
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                Política de envíos
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                Términos y condiciones
                </Link>
                <Link to="/blogs" className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Cuenta</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Sobre nosotros</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contacto</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Enlaces rápidos</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Pizzas</Link>
                <Link className="text-white py-2 mb-1">Empanadas</Link>
                <Link className="text-white py-2 mb-1">Lomos</Link>
                <Link className="text-white py-2 mb-1">Bebidas</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} - Powered by Augusto Castro.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;