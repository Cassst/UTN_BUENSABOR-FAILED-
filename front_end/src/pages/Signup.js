import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const Singup = () => {
  return (
    <>
      <Meta title={"Registro"} />
      <BreadCrumb title="Crear Cuenta" />
      <Container className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Crear Cuenta</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    placeholder="Apellido"
                  />
                </div>
                <div>
                  <input
                    type="user"
                    name="user"
                    className="form-control"
                    placeholder="Usuario"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    className="form-control"
                    placeholder="Teléfono"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Contraseña"
                  />
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Registrarse
                    </button>
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

export default Singup;
