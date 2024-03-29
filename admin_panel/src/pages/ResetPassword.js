import React from "react";
import CustomInput from "../components/CustomInput";

const Resetpassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Restablecer contraseña</h3>
        <p className="text-center">Introduzca su nueva contraseña.</p>
        <form action="">
          <CustomInput type="password" label="Contraseña nueva" id="pass" />
          <CustomInput
            type="password"
            label="Confirmar contraseña"
            id="confirmpass"
          />

          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Restablecer contraseña
          </button>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
