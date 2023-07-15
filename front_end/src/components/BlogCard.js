import React from "react";
import { Link } from "react-router-dom";
import photo001 from "../assets/images/blog/blog00.jpg";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={photo001} className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2026</p>
        <h5 className="title">Las mejores técnicas para amasar masa</h5>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat
          accusamus officia
        </p>
        <Link to="/blog/:id" className="button">
          Leer más
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;