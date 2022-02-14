import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../product/Product";
import "./../../products";
import products from "./../../products";
import axios from "axios";
import { getAllProducts } from "../../queries/products";

const ListingPage = () => {
  const [localState, setLocalState] = useState({
    isError: false,
    isFetching: false,
    products: [],
  });
  useEffect(() => {
    const fetchProds = async () => {
      let products = [],
        isError = false;
      setLocalState((prev) => {
        return {
          ...prev,
          isFetching: true,
        };
      });
      try {
        const response = await getAllProducts();
        if (response.status === 200) products = response?.data;
        else isError = true;
      } catch {
        products = [];
        isError = true;
      }
      setLocalState((prev) => {
        return {
          ...prev,
          isError,
          isFetching: false,
          products,
        };
      });
    };
    fetchProds();
  }, []);
  return (
    <div className="d-flex flex-column m-3 p-3">
      <h1>Latest Products</h1>
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
            <Row>
              {localState?.products.map((product, key) => (
                <Col sm={12} md={6} lg={4} xl={3} key={key}>
                  <Product {...product} />
                </Col>
              ))}
            </Row>
          )}
        </>
      )}
    </div>
  );
};

export default ListingPage;
