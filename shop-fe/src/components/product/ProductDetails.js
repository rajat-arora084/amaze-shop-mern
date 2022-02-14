import { useEffect, useState } from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../../queries/products";
import Rating from "../rating/Rating";
import products from "./../../products";

const ProductDetails = () => {
  const params = useParams();

  const [localState, setLocalState] = useState({
    isError: false,
    isFetching: false,
    product: {},
  });
  useEffect(() => {
    const fetchProds = async () => {
      let product = {},
        isError = false;
      setLocalState((prev) => {
        return {
          ...prev,
          isFetching: true,
        };
      });
      try {
        const response = await getProduct(params.id);
        console.log(response);
        if (response.status === 200) product = response?.data;
        else isError = true;
      } catch {
        product = {};
        isError = true;
      }
      setLocalState((prev) => {
        return {
          ...prev,
          isError,
          isFetching: false,
          product,
        };
      });
    };
    fetchProds();
  }, [params.id]);
  const product = localState?.product;
  return (
    <div className="my-3 mx-3">
      <Link
        className="btn btn-light "
        // style={{ width: "100px", height: "40px" }}
        to="/"
      >
        Go Back
      </Link>
      {localState?.isFetching ? (
        <>Data Loading...</>
      ) : (
        <>
          {localState?.isError ? (
            <>
              Some error occured while fetching products data. Pls try again in
              some time.
            </>
          ) : (
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
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetails;
