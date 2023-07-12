import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title="Favoritos" />
      <BreadCrumb title="Favoritos" />
      <Container className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card w-100 position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/products/pan001.jpg"
                  className="img-fluid w-100"
                  alt="Comida001"
                />
                <div className="py-3 px-3">
                  <h5 className="title">
                    BACON SANDWICH WITH CARAMELIZED ONIONS
                  </h5>
                  <h6 className="price mb-3">$1.700</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
