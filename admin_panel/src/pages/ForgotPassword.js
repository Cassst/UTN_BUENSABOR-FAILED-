import React from "react";
import CustomInput from "../components/CustomInput";

const Forgotpassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Recuperar Contraseña</h3>
        <p className="text-center">
          Por favor, introduzca su dirección de correo electrónico para
          restablecer su contraseña.
        </p>
        <form action="">
          <CustomInput type="password" label="Correo Electrónico" id="email" />

          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Enviar enlace
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
