import React from "react";
import { Container, Row, Col } from "reactstrap";
import categoryImg01 from "../../../assets/spacial-food3 (1).jpg";
import categoryImg02 from "../../../assets/spacial-food2.jpg";
import categoryImg03 from "../../../assets/spacial-food1.jpg";
import "../../../styles/category.css";

const categoryData = [
  {
    imgUrl: categoryImg01,
  },
  {
    imgUrl: categoryImg02,
  },

  {
    imgUrl: categoryImg03,
  },

 
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              
                <img  className="category__img" src={item.imgUrl} alt="category__item" />
              
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
