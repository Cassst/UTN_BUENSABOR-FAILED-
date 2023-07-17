import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
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
                <CustomInput type="text" name="name" placeholder="Nombre" />
                <CustomInput
                  type="text"
                  name="lastname"
                  placeholder="Apellido"
                />
                <CustomInput type="user" name="user" placeholder="Usuario" />
                <CustomInput type="tel" name="mobile" placeholder="Teléfono" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

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
