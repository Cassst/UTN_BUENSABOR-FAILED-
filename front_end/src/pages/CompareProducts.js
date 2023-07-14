import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const CompareProducts = () => {
  return (
    <>
      <Meta title={"Comparación de Productos"} />
      <BreadCrumb title="Comparar" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img
                  src="images/products/pan001.jpg"
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
