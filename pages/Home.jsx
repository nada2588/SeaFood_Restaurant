import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/about.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category.jsx";
import "../styles/home.css";
import featureImg01 from "../assets/wifi_PNG62335.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import products from "../assets/fake-data/products.js";
import whyImg from "../assets/seafood-restaurant-in-sharjah (1).png";
import networkImg from "../assets/bucket.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Super Done ",
    imgUrl: featureImg02,
  },

  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
  },
  
  {
    title: "Quick Wifi",
    imgUrl: featureImg01,
  },


];
const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    
    
            
    <Helmet title="Home">
      <section>
      
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Easy way to get your food </h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your table</span>
                </h1>

                <p>
                Use this app to get your food in the restruant. And we are beside you if you wanna any help.

                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                  <Link to="/foods">Order Now</Link>
 <i class="ri-arrow-right-s-line"></i>
                  </button>

                
                </div>
 
                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                    <i class="ri-user-unfollow-fill"></i>

                    </span>{" "}
                   Low service charge

                  </p>
               
               
              

                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
       
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="feature__title">Just sit back at your table </h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
              Use this app to get your food in the restruant. And we are beside you if you wanna any help. Hope good day for you



              </p>
              
             
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

   

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Junior Seafood?</span>
                </h2>
                <br></br>
                <br></br>
                <br></br>
               
                <p className="tasty__treat-desc">
                Junior Seafood was established in 2010 and now we have 5 branches
                 which are located in Cairo and Helwan. We are also participating in festivals
                  and 6 consecutive years for Global Village. We are also catering 
                 corporate functions here in Egypt.
                 <br></br>
                 Our Company has a remarkable legacy of commercializing 
                 successful business ideas. We have plans to expand our business
                  and features to deliver the best service and  food dishes to the Egypt.
                   Our objective is to deliver the best services to our guest while simultaneously
                    increasing profitability and being able to take advantage of the opportunities across 
                    the Egypt. We will pursue a
                  focused regional growth strategy by entering the food market  here in Egypt.
                </p>

                <ListGroup className="mt-4">
                 
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
               
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
