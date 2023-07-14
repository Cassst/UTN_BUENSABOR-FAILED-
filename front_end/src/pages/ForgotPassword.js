import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const ForgotPassword = () => {
  return (
    <>
      <Meta title="Recuperar Contraseña" />
      <BreadCrumb title="Recuperar Contraseña" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Restablecer la contraseña</h3>
              <p className="text-center mt-2 mb-3">
                Enviaremos un correo electrónico para restablecer su contraseña
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="user"
                    name="user"
                    className="form-control text-center"
                    placeholder="Ingrese correo electrónico"
                  />
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Enviar
                    </button>
                    <Link to="/login">Cancelar</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgotPassword;
