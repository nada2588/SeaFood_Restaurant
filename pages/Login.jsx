import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
const Login = () => {


  return (
    <Helmet title="Done">
      <CommonSection title="" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              
            <i class="ri-check-double-fill"></i>
            <div className="animation">
            <h4 className="mb-3"> Order<span className="new"> Done</span> </h4>
            <h5 className="mb-3">  <span className="new">Wait</span> the order on your table </h5>
            
            <h6 className="mb-3"> Have a <span className="new">Good</span> Day. </h6>
            </div>



            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
