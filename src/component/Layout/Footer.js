import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import {
  AiFillTwitterCircle,
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <Navbar bg="light" className="text-center text-lg-start">
      <Container className="d-flex justify-content-center">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <Nav.Link className="me-3 text-reset">
          <AiFillTwitterCircle />
        </Nav.Link>
        <Nav.Link className="me-3 text-reset">
          <BsFacebook />
        </Nav.Link>
        <Nav.Link className="me-3 text-reset">
          <AiFillGoogleCircle />
        </Nav.Link>
        <Nav.Link className="me-3 text-reset">
          <AiFillInstagram />
        </Nav.Link>
        <Nav.Link className=" me-3 text-reset">
          <AiFillLinkedin />
        </Nav.Link>

        <Row>
          <Col>
            <div className="text-center py-4">© 2023 Copyright:</div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Footer;
