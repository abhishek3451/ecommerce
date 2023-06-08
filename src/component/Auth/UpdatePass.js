import { useContext, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Store/AuthContext";
import { Button, Col, Container, Form, Input, Row } from "reactstrap";

const UpdatePass = () => {
  const navigate = useNavigate();

  const tokenCtx = useContext(AuthContext);

  const updtePwdRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredpassword = updtePwdRef.current.value;

    await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDf_sfgPLzQu58B72m9PEnCJ3r_FiIy3ag",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: tokenCtx.token,
          password: enteredpassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    alert("Password changed");

    navigate("/login");
  };
  return (
    <>
      <Container
        className="p-3 card"
        style={{ marginTop: "08rem", marginBottom: "14rem" }}
      >
        <Row>
          <Col xs="12" sm="8">
            <h3 style={{ justifyContent: "center" }}> Update Password :</h3>
          </Col>
          <Col xs="12" sm="4" className="text-right">
            <Link to="/AuthPage">
              <Button color="dark" style={{ float: "right" }}>
                CANCEL
              </Button>
            </Link>
          </Col>
          <Form onSubmit={handleSubmit}>
            <Col xs="12" sm="8">
              <Input
                placeholder="password"
                type="password"
                name="password"
                minLength={"7"}
                innerRef={updtePwdRef}
              />
              <Button
                type="submit"
                color="dark"
                style={{ float: "left", marginTop: "0.5rem" }}
              >
                UPDATE
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default UpdatePass;
