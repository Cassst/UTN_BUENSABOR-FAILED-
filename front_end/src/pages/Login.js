import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Login = () => {
  return (
    <>
      <Meta title="Iniciar Sesión" />
      <BreadCrumb title="Iniciar Sesión" />
      <Container className="home-wrapper-2 py-5">
        <div className="login-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Iniciar Sesión</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="user"
                      name="user"
                      className="form-control"
                      placeholder="Usuario"
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
                    <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0" type="submit">
                        Ingresar
                      </button>
                      <Link to="/signup" className="button border-0 text-white">
                        Registrarse
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
