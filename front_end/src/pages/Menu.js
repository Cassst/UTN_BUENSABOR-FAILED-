import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";

const Menu = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title="Menu" />
      <BreadCrumb title="Menu" />
      <Container className="home-wrapper-2 py-5">
        <div className="store-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Productos por categoría</h3>
                <div>
                  <ul className="ps-0">
                    <li>Pizza</li>
                    <li>Lomos</li>
                    <li>Hamburguesas</li>
                    <li>Bebidas</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Productos</h3>
                <div>
                  <h5 className="sub-title">Libres de</h5>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Gluten
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Lactosa
                    </label>
                  </div>
                </div>
                <h3 className="filter-title">Precio</h3>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Desde"
                    />
                    <label htmlFor="floatingInput">Desde $</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Hasta"
                    />
                    <label htmlFor="floatingInput">Hasta $</label>
                  </div>
                </div>
                <div>
                  <h5 className="sub-title">Tamaños</h5>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Individual
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Para Compartir
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Productos por etiquetas</h3>
                <div>
                  <div className="product-tag d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-secondary bounded-3">Oferta</span>
                    <span className="badge bg-secondary bounded-3">
                      FreeGluten
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-iems-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Buscar por:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Opciones:</option>
                      <option value="best-selling" selected="selected">
                        Más vendidos
                      </option>
                      <option value="price-ascending">
                        Precio, más bajo a más alto
                      </option>
                      <option value="price-descending">
                        Precio, más alto a más bajo
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 productos</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Menu;
