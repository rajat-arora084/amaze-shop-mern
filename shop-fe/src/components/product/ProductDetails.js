import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Rating from "../rating/Rating";
import products from "./../../products";

const ProductDetails = () => {
  const params = useParams();
  const product = products.find((prd) => prd._id === params.id);
  return (
    <div className="my-3 mx-3">
      <Link
        className="btn btn-light "
        // style={{ width: "100px", height: "40px" }}
        to="/"
      >
        Go Back
      </Link>
      <Row className="my-4">
        <Col md={6} lg={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3} lg={4}>
          <ListGroup className="border-0">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                totalReviews={product.numReviews}
                prodRating={product.rating}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Price ${product.price}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Description ${product.description}</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3} lg={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>${product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>
                    {product.countInStock ? "In stock" : "Out of stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn btn-dark"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
