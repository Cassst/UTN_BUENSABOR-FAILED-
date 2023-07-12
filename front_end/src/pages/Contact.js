import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";
const Contact = () => {
  return (
    <>
      <Meta title="Contacto" />
      <BreadCrumb title="Contacto" />
      <Container className="home-wrapper-2 py-5">
        <div className="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13400.176107283121!2d-68.8533635!3d-32.8970042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0908d5e865c5%3A0xb5ec70786453a73!2sUTN%20Facultad%20Regional%20Mendoza!5e0!3m2!1ses-419!2smx!4v1689080441260!5m2!1ses-419!2smx"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullSreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">Dejanos un mensaje</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="E-mail"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Teléfono"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comentarios"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button">Enviar</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Contacta con nosotros</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address>Coronel Rodríguez 273, Ciudad</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="+54 261 524-4500">+54 261 524-4500</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:utn@utn.com">utn@utn.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Lunes a Sabados 17:00 - 00:30</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
