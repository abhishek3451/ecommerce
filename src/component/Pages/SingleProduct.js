import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

import { productsArr } from "../ItemList/data";
import CartContext from "../store/CartContext";

const ProductDetail = () => {
  const { fetchCartItems, handleAddItem } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState("");

  const fetchProductDetails = () => {
    const item = productsArr.find((itm) => itm.id === +id);

    setProduct(item);
  };
  const handleSubmit = (pro) => {
    const user = localStorage.getItem("userName");
    handleAddItem({ ...pro, quantity: 1 }, user);
  };
  useEffect(() => {
    fetchProductDetails();
    fetchCartItems();
  });

  const image = (
    <img
      src={product.imageUrl}
      alt={product.title}
      style={{ height: "28rem", borderRadius: "5px", marginTop: "2rem" }}
    />
  );
  return (
    <>
      {/* <Container>
        {image}

        <Right>
          <Title>{product.title}</Title>
          <Price>Rs. {product.price}</Price>
          <Review>221 ratings and 15 reviews</Review>
          <Descr>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            optio officia nihil reprehenderit esse nulla alias assumenda quidem
            cum, laudantium cupiditate commodi aut ut maiores, fugiat et numquam
            molestias unde odio doloremque deserunt eum ducimus? Est assumenda
            quas excepturi dolores doloribus quae animi temporibus distinctio
            porro modi culpa, cumque atque.
          </Descr>
          <Button onClick={() => handleSubmit(product)}>+Add to cart</Button>
        </Right>
      </Container> */}
      <section className="container">
        <div className="col d-flex justify-content-center">
          <Card
            style={{
              width: "20rem",
              height: "30rem",
              marginTop: "6rem",
              border: "none",
            }}
          >
            <Card.Img
              variant="top"
              src={product.imageUrl}
              alt={product.title}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <small>Price: {product.price} USD</small>
            </Card.Body>
            <Card.Footer>
              {/* <small className="text-muted">Price: {product.price} USD</small> */}
            </Card.Footer>
          </Card>
          <ListGroup style={{ width: "36rem", margin: "5rem" }}>
            <h1 className="text-center">Reviews</h1>

            <Card className="mb-4">
              <Card.Header>abc</Card.Header>
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, optio officia nihil reprehenderit esse nulla alias
                  assumenda quidem cum, laudantium cupiditate commodi aut ut
                  maiores, fugiat et numquam molestias unde odio doloremque
                  deserunt eum ducimus? Est assumenda quas excepturi dolores
                  doloribus quae animi temporibus distinctio porro modi culpa,
                  cumque atque.
                </Card.Text>
              </Card.Body>
              <ListGroupItem>Rating: 4 out of 5</ListGroupItem>
            </Card>
            <Button
              variant="dark"
              size="sm"
              style={{ width: "20%" }}
              onClick={() => handleSubmit(product)}
            >
              Add to cart
            </Button>
          </ListGroup>
        </div>
      </section>
    </>
  );
};
export default ProductDetail;
