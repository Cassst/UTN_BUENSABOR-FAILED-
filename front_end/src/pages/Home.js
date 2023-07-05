import React from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner">
              <img
                src="images/banners/pizza001.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="banner-overlay"></div>
              <div className="banner-content">
                <h4>Pizzas</h4>
                <h5>Las mejores combinaciones</h5>
                <p>Desde $2.600</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/banners/burger002.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Hamburguesas</h4>
                  <h5>Únicas como vos</h5>
                  <p>Desde $2.000</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/banners/empanada001.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Empanadas</h4>
                  <h5>Tres variedades</h5>
                  <p>Tres sabores</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/banners/drink001.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Bebidas</h4>
                  <h5>Happy Hour</h5>
                  <p>
                    Desde las 18:00hs <br /> Hasta las 00:00hs
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/banners/lomo001.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Lomos</h4>
                  <h5>Descrubi el tuyo</h5>
                  <p>Por $4.500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-15">
                <img src="/images/icons/service.png" alt="services" />
                <div>
                  <h6>Lorem Impsu</h6>
                  <p className="mb-0">Lorem Impsu</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="/images/icons/service-02.png" alt="services" />
                <div>
                  <h6>Lorem Impsu</h6>
                  <p className="mb-0">Lorem Impsu</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="/images/icons/service-03.png" alt="services" />
                <div>
                  <h6>Lorem Impsu</h6>
                  <p className="mb-0">Lorem Impsu</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="/images/icons/service-04.png" alt="services" />
                <div>
                  <h6>Lorem Impsu</h6>
                  <p className="mb-0">Lorem Impsu</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="/images/icons/service-05.png" alt="services" />
                <div>
                  <h6>Lorem Impsu</h6>
                  <p className="mb-0">Lorem Impsu</p>
                </div>
              </div>
              {/*
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            */}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Pizzas</h6>
                  <p>12 Items</p>
                </div>
                <img src="images/icons/pizza002.jpeg" alt="pizza" style={{ borderRadius: '8px' }}/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Empanadas</h6>
                  <p>3 Items</p>
                </div>
                <img src="images/icons/empanada001.jpeg" alt="empanada" style={{ borderRadius: '8px' }}/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Hamburguesas</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/icons/burger002.jpeg" alt="hamburguesa" style={{ borderRadius: '8px' }}/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Lomos</h6>
                  <p>8 Items</p>
                </div>
                <img src="images/icons/lomo001.jpeg" alt="lomo" style={{ borderRadius: '8px' }}/>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Colección especial</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/products/burguer001.jpg" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Hamburguesas</h5>
                <h6>Los mejores sabores entre pan</h6>
                <p>Desde $2.000</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/products/pizza001.jpg" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-white">Pizzas</h5>
                <h6 className="text-white">Crocantes y con personalidad.</h6>
                <p className="text-white">Encontra la tuya.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/products/empanadas001.jpg" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-white">Empanadas</h5>
                <h6 className="text-white">Las clásicas de toda la vida.</h6>
                <p className="text-white">
                  Pédilas por únidad - docena - media docena
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/products/lomo001.jpg" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-white">Lomos</h5>
                <h6 className="text-white">steak sandwiches.</h6>
                <p className="text-white">
                  Desde $4.550 en tamaño XXL
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Productos Destacados</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Ofertas Especiales</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container className="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/products/pizza_icon.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/products/empanada_icon.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/products/drink_icon.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/products/lomo_icon.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/products/drink_icon.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/products/burguer_icon.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/products/fries_icon.jpg" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container className="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading mt-5">Nuestros blogs más recientes</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
