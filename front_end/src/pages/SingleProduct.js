import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title="Product" />
      <BreadCrumb title="Product" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div children="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Descripción</h4>
              <div className="bg-white p-3">
                <p>lorem impsuaslkjdajkdlasbfl</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container className="reviews-wrapper pb-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reseñas</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                  <h4 className="mb-2">Valoración</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Total de Reseñas: 2</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a href="/" className="text-dark">
                        Escribe una Reseña
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Deja tu reseña</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="E-mail"
                      />
                    </div>
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comentarios"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button">Enviar Reseña</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Cliente 1</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">Muito Bon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="popular-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Ofertas Especiales</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
