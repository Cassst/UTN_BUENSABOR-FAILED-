import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import photo001 from "../assets/images/products/pan001.jpg";
import cross from "../assets/images/cross.svg";
const CompareProducts = () => {
  return (
    <>
      <Meta title={"Comparación de Productos"} />
      <BreadCrumb title="Comparar" />
      <Container className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img
                  src={photo001}
                  className="img-fluid"
                  alt="Comida001"
                />
                <h5 className="title">
                  BACON SANDWICH WITH CARAMELIZED ONIONS
                </h5>
                <h6 className="price mb-3">$1.700</h6>
                <div>
                  <div className="product-detail">
                    <h5>Categoria:</h5>
                    <p>Sandwichs</p>
                  </div>
                  <div className="product-detail">
                    <h5>Stock:</h5>
                    <p>Disponible</p>
                  </div>
                  <div className="product-detail">
                    <h5>Alérgenos:</h5>
                    <p>Tacc</p>
                  </div>
                  <div className="product-detail">
                    <h5>Tamaño:</h5>
                    <div className="d-flex gap-10">
                      <p>Mediano</p>
                    </div>
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

export default CompareProducts;
