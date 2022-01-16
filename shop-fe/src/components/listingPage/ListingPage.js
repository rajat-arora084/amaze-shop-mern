import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../product/Product";
import "./../../products";
import products from "./../../products";

const ListingPage = () => {
  console.log("list");
  return (
    <div className="d-flex flex-column m-3 p-3">
      <h1>Latest Products</h1>
      <Row>
        {products.map((product, key) => (
          <Col sm={12} md={6} lg={4} xl={3} key={key}>
            <Product {...product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListingPage;
