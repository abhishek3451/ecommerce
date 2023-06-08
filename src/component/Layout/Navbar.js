import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import HeaderButton from "./HeaderButton";
import "../../App.css";
import { useContext } from "react";
import AuthContext from "../../Store/AuthContext";
const Navbarr = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const navigate = useNavigate();

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/login");
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand>SpeedySnag</Navbar.Brand>

        <Nav style={{ fontVariant: "light" }}>
          <NavLink to="/" className={"LINK"}>
            <span> Home</span>
          </NavLink>
          <NavLink to="/about" className={"LINK"}>
            <span> About Us</span>
          </NavLink>

          <NavLink to="/store" className={"LINK"}>
            <span> Products</span>
          </NavLink>
          {isLoggedIn && (
            <NavLink to="/updatePass" className={"LINK"}>
              <span> Profile</span>
            </NavLink>
          )}
          <NavLink to="/contactus" className={"LINK"}>
            <span> Contact Us</span>
          </NavLink>
          {!isLoggedIn && (
            <NavLink to="/login" className={"LINK"}>
              <span> Login</span>
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink to="/cart">
              <span>
                <HeaderButton onClick={props.onShowcart} />
              </span>
            </NavLink>
          )}

          {isLoggedIn && (
            <Button
              variant="danger"
              size="sm"
              className="py-0"
              onClick={logoutHandler}
            >
              Logout
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Navbarr;
