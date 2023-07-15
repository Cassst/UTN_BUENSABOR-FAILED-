import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const SingleProduct = () => {
  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,
    img: "https://i.pinimg.com/564x/a5/0a/3f/a50a3fb25ddf19e3103420ae1b074aa5.jpg",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = async (text) => {
    console.log("Text copied to clipboard: ", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    await navigator.clipboard.writeText(text);
    textField.remove();
  };
  const closeModal = () => {};

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  {props.img && <ReactImageZoom {...props} />}
                  {props.img && (
                    <div className="main-product-image">
                      {React.Children.map(props.children, (child) => {
                        if (child.type === "img") {
                          return React.cloneElement(child, {
                            style: { display: "none" },
                          });
                        }
                        return child;
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://i.pinimg.com/564x/a5/0a/3f/a50a3fb25ddf19e3103420ae1b074aa5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://i.pinimg.com/564x/a5/0a/3f/a50a3fb25ddf19e3103420ae1b074aa5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://i.pinimg.com/564x/a5/0a/3f/a50a3fb25ddf19e3103420ae1b074aa5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://i.pinimg.com/564x/a5/0a/3f/a50a3fb25ddf19e3103420ae1b074aa5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Special Fries</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 1.600</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">( 2 Reviews )</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Escribe tu reseña
                  </a>
                </div>
                <div className="py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Categoría:</h3>
                    <p className="product-data">Entradas</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Libre de:</h3>
                    <p className="product-data">Glutén</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">Papas</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Disponibilidad :</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Tamaño :</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        Individual
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        Mediana
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        Para compartir
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        Sobredosis
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                    <h3 className="product-heading">Cantidad:</h3>
                    <div>
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: "70px" }}
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button
                        className="button border-0"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        type="button"
                      >
                        Al Carrito
                      </button>
                      <button className="button signup">Comprar Ahora</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="/">
                        <TbGitCompare className="fs-5 me-2" /> Comparar
                      </a>
                    </div>
                    <div>
                      <a href="/">
                        <AiOutlineHeart className="fs-5 me-2" /> Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column  my-3">
                    <h3 className="product-heading">Delivery:</h3>
                    <p className="product-data">
                      Envíos disponibles en todas tus compras! <br />
                      <b>En 30 minutos confirmado el pedido</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Product Link:</h3>
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        copyToClipboard(
                          "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                        );
                      }}
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Descripción</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur nisi similique illum aut perferendis voluptas, quisquam
                obcaecati qui nobis officia. Voluptatibus in harum deleniti
                labore maxime officia esse eos? Repellat?
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container className="reviews-wrapper pb-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reseñas</h3>
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
