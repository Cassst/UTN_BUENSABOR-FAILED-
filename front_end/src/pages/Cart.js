import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import photo001 from "../assets/images/products/pizza.png";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Pedido"} />
      <BreadCrumb title="Pedido" />
      <Container className="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Menú</h4>
              <h4 className="cart-col-2">Precio</h4>
              <h4 className="cart-col-3">Cantidad</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={photo001} className="img-fluid" alt="Food" />
                </div>
                <div className="w-75">
                  <p>Pizza Peperonni</p>
                  <p>Tamaño: Familiar</p>
                  <p>Categoría: Pizza</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 2.600</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    min={1}
                    max={10}
                    id=""
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger " />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$ 2.600</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continuar comprando
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $ 2.600</h4>
                <p>Costos Delivery calculados al realizar la compra</p>
                <Link to="/checkout" className="button">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;