import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import photo001 from "../assets/images/products/pan001.jpg";
const SpecialProduct = () => {
  return (
    <>
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img src={photo001} className="img-fluid" alt="food" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">BACON SANDWICH</h5>
              <h6 className="title">
              WITH CARAMELIZED ONIONS
              </h6>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">$1.000</span> &nbsp; <strike>$1.360</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>5 </b>days
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>
                </div>
              </div>
              <div className="prod-count my-3">
                <p>Products: 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">Agregar</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;