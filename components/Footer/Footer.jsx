import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/bucket.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>JUNIOR SEAFOOD</h5>
              <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0"> </p>
           

              <span>
                <Link to="https://github.com/46837">
                  <i class="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to="https://www.youtube.com/watch?v=Fs6mDKVMj2U">
                  <i class="ri-youtube-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to=" https://www.linkedin.com/in/nada-hesham-22649a218/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
          
            </div>
          
         
          </Col>
         
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Our Branches</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Al Sikka Al Hadid ,Helwan</span>
                <p> : +20 11128521</p>
                <span>Al Sikka Al Hadid ,Cairo</span>
                <p> : +20 10127411</p>
                <span>Al Gharbeya,Helwan</span>
                <p> : +20 1512057411</p>
                <span>Ain Helwan,Helwan</span>
                <p> : +20 1212041581</p>
                <span>Al Sikka Al Hadid ,Helwan</span>
                <p> : +20 11128521</p>
              </ListGroupItem>

            
            </ListGroup>

          </Col>


          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">opening Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Saturday - Thursday</span>
                <p>11:00am - 2:00am</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday</span>
                <p> 1:00pm - 2:00am</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
            
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: +20 158710505</span>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Hot line: 18757</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: juniorseafood@gmail.com</span>
              </ListGroupItem>
              
            </ListGroup>
         
          </Col>
          

        </Row>

        <Col lg="6" md="6">
         
          </Col>
      </Container>
    
    </footer>
  );
};

export default Footer;
