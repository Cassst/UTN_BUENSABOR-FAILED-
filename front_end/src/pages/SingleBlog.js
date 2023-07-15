import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import photo001 from "../assets/images/blog/blog00.jpg";
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Nombre Blog"} />
      <BreadCrumb title="Nombre Blog" />
      <Container className="blog-wrapper home-wrapper-2 py-5">
        <div className="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <h3 className="title">Las mejores técnicas para amasar masa</h3>
                <img
                  src={photo001}
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  quaerat accusamus officia
                </p>
                <Link to="/blogs" className="d-flex align-items-center gap-10"><HiOutlineArrowLeft className="fs-4"/>Atrás</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
